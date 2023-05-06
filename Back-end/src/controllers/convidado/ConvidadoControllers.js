const ConvidadoService = require("../../services/convidado/ConvidadoService");

module.exports = {
  getAll: async (req, res) => {
    let json = { error: "", result: [] };
    let convidados = await ConvidadoService.getAll();

    for (let i in convidados) {
        json.result.push({
            nome: convidados[i].nome,
            cargo: convidados[i].cargo,
            empresa:convidados[i].nome_empresa,
            email: convidados[i].email,
            telefone: convidados[i].telefone,
        });
    }
    res.json(json);
  },

  getById: async (req, res) => {
    let json = { error: "", result: {} };
    let nome = req.params.nome;
    let convidado = await ConvidadoService.getById(nome);

    if (convidado) {
        json.result = convidado;
    }

    res.json(json);
  },

  addConvidado: async (req, res) => {
    let json = { error: "", result: {} };

    let nome = req.body.nome;
    let email = req.body.email;
    let cargo = req.body.cargo;
    let telefone = req.body.telefone;
    let empresa = req.body.empresa;

    try {
        await ConvidadoService.addConvidado(nome, email, cargo, telefone, empresa);
        json.result = {
            nome,
            email,
            cargo,
            telefone,
            empresa,
        };
    } catch (error) {
        console.log(error);
        json.error; 
    }

    res.json(json);
  },

  updateConvidado: async (req, res) => {
    let json = { error: "", result: {} };

    let nomes = req.params.nomes;
    let nome = req.body.nome;
    let email = req.body.email;
    let cargo = req.body.cargo;
    let telefone = req.body.telefone;
    let empresa = req.body.empresa;

    try {
        await ConvidadoService.updateConvidado(nomes,nome,email,cargo,telefone,empresa);
        json.result = {
            nomes,
            email,
            cargo,
            telefone,
            empresa
        };
    } 
    catch (error) {
        console.log(error);
        json.error("Campos não enviados"); 
    }
    res.json(json);
  },

  delConvidado: async (req, res) => {
    let json = { error: "", result: {} };

    await ConvidadoService.delConvidado(req.params.nome);
    res.json(json);
  },
};