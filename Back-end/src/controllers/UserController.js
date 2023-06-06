const UserService = require("../services/UserService");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const User = require("../models/user.model");

module.exports = {

    getAll: async (req, res) => {
        let json = { error: '', result: [] };

        let users = await UserService.getAll();

        if (users) {
            json.result = users;
        }
        res.json(json);
    },

    getById: async (req, res) => {
        let json = { error: '', result: [] };

        let email = req.params.email;
        let user = await UserService.getById(email);

        if (user) {
            json.result = user;
        }
        res.json(json);
    },

    getStatus: async (req, res) => {
        let json = { error: '', result: [] };

        let user = await UserService.getStatus();

        if (user) {
            json.result = user;
        }
        res.json(json);
    },

    addUser: async (req, res) => {
        let json = { error: '', result: [] };

        let nome = req.body.nome;
        let email = req.body.email;
        let senha = req.body.senha;
        let cargo = req.body.cargo;
        let telefone = req.body.telefone;
        let nivelAcesso = req.body.nivelAcesso;
        let statusUsuario = req.body.statusUsuario;
        let instituicao = req.body.instituicao;

        try {
            const hashedPassword = await bcrypt.hash(senha, 8);
            await UserService.addUser(nome, email, hashedPassword, cargo, telefone, nivelAcesso, statusUsuario, instituicao);
            json.result = {
                nome,
                email,
                senha,
                cargo,
                telefone,
                nivelAcesso,
                statusUsuario,
                instituicao,

            };

        } catch (error) {
            console.log(error)
        }
        res.json(json)
    },

    updateUser: async (req, res) => {
        let json = { error: '', result: {} };

        let emailp = req.params.email;
        let nome = req.body.nome;
        let email = req.body.email;
        let cargo = req.body.cargo;
        let telefone = req.body.telefone;
        let nivelAcesso = req.body.nivelAcesso;
        let statusUsuario = req.body.statusUsuario;
        let instituicao = req.body.instituicao;


        try {
            const hashedPassword = await bcrypt.hash(senha, 8);
            await UserService.updateUser(emailp, nome, email, hashedPassword, cargo, telefone, nivelAcesso, statusUsuario, instituicao);

            json.result = {
                nome,
                email,
                cargo,
                telefone,
                nivelAcesso,
                statusUsuario,
                instituicao,

            };
        } catch (error) {
            console.log(error);
        }
        res.json(json);
    },

    updateStatusUser: async(req,res) => {
        let json = { error:'', result:{}};

        let email = req.params.email;
        let statusUsuario = req.body.status_usuario

        try{
            await UserService.updateStatusUser(email, statusUsuario);

            if(statusUsuario = 1){
                return res.status(200).send({
                    message: 'Cadastro do usuario foi aprovado.'
                });
            }
            if(statusUsuario = 2){
                return res.status(200).send({
                    message: 'Cadastro do usuario foi negado.'
                });
            }

        }catch(error){
            return res.status(500).send({
                message: 'Não foi possivel completar a requisição.'
            });
        }
    },

    updateSenha: async (req, res) => {
        let json = {error:'', result:{}};

        let email = req.params.email;
        let senha = req.body.senha;

        try{
            const hashedPassword = await bcrypt.hash(senha, 8);
            await UserService.updateSenha(email, hashedPassword);
            json.result = {
                hashedPassword
            }
        }catch(error){
            console.log(error);
        }
        res.json(json);

    },

    delUser: async (req, res) => {
        let json = { error: '', result: {} };


        await UserService.delUser(req.params.email);
        res.json(json);
    },

    login: async (req, res) => {
        try {
            let email = req.body.email;
            let senha = req.body.senha;

            var results = await UserService.login(email);

            console.log(results);
            if (1 == results[0].status_usuario) {
                if (await bcrypt.compare(senha, results[0].senha)) {

                    const user = new User(results[0].id)
                    const token = jwt.sign({
                        id: results[0].id,
                        nome: results[0].nome,
                        sub: user,
                        email: results[0].email,
                        nivelAcesso: results[0].nivel_acesso
                    },
                        process.env.JWT_KEY,
                        {
                            expiresIn: "6d"
                        });
                    return res.status(200).send({
                        message: 'Autenticado com sucesso',
                        token: token,
                    });
                }
            }
            return res.status(401).send({ message: 'Falha na autenticação' });


        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: 'Falha na autenticação' });
        }

    }

}