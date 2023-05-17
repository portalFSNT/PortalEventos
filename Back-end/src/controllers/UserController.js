const UserService = require("../services/UserService");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

module.exports = {

    getAll: async (req, res) => {
        let json = {error:'', result:[]};

        let users = await UserService.getAll();
        console.log(users)
        if(users){
            json.result = users;
        }
        res.json(json);
    },

    getById: async(req, res) => {
        let json = {error:'', result:[]};

        let email = req.params.email;
        let user = await UserService.getById(email);

        if(user){
            json.result = user;
        }
        res.json(json);
    },

    addUser: async(req, res) => {
        let json = {error:'', result:[]};

        let nome = req.body.nome;
        let email = req.body.email;
        let senha = req.body.senha;
        let login = req.body.login;
        let cargo = req.body.cargo;
        let telefone = req.body.telefone;
        let nivelAcesso = req.body.nivelAcesso;
        let statusUsuario = req.body.statusUsuario;
        let instituicao = req.body.instituicao;

        try {
            const hashedPassword = await bcrypt.hash(senha, 8);
            await UserService.addUser(nome, email, hashedPassword, login, cargo, telefone, nivelAcesso, statusUsuario, instituicao);
            json.result = {
                nome,
                email,
                senha,
                login,
                cargo,
                telefone,
                nivelAcesso,
                statusUsuario,
                instituicao,

            };

        }catch(error){
            console.log(error)
        }
        res.json(json)
    },

    updateUser: async(req, res) => {
        let json = {error:'',result:{}};

        let nome = req.body.nome;
        let email = req.body.email;
        let senha = req.body.senha;
        let login = req.body.login;
        let cargo = req.body.cargo;
        let telefone = req.body.telefone;
        let nivelAcesso = req.body.nivelAcesso;
        let statusUsuario = req.body.statusUsuario;
        let instituicao = req.body.instituicao;

        try{
            const hashedPassword = await bcrypt.hash(senha, 8);
            await UserService.updateUser(nome, email, hashedPassword, login, cargo, telefone, nivelAcesso, statusUsuario, instituicao);
            json.result = {
                nome,
                email,
                senha,
                login,
                cargo,
                telefone,
                nivelAcesso,
                statusUsuario,
                instituicao,

            };
        }catch(error){
            console.log(error);
        }
        res.json(json);
    },

    delUser: async(req, res) => {
        let json = {error:'', result:{}};

        await UserService.delUser(req.params.email);
        res.json(json);
    },

    login: async(req, res) => {
        try {
            let email = req.body.email;
            let senha = req.body.senha;

            var results = await UserService.login(email);
 
            console.log(results);
            if(1 == results[0].status_usuario){
                if(await bcrypt.compare(senha, results[0].senha)){
                    const token = jwt.sign({
                        nome: results[0].nome,
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
                    console.log(token);
                }
            }
            return res.status(401).send({ message: 'Falha na autenticação'});


        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: 'Falha na autenticação' });
        }

    }

}