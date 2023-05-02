const UserService = require("../services/UserService");

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

            await UserService.addUser(nome, email, senha, login, cargo, telefone, nivelAcesso, statusUsuario, instituicao);
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
            await UserService.updateUser(nome, email, senha, login, cargo, telefone, nivelAcesso, statusUsuario, instituicao);
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
    }

}