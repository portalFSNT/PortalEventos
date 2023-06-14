const EmpresaService = require("../../services/convidados/EmpresaService");

module.exports = {

    getAll: async(req, res) => {
        let json = { error: "", result: [] };
        let empresas = await EmpresaService.getAll();

        for (let i in empresas) {
            json.result.push({
                nome: empresas[i].nome,
            });
        }
        res.json(json);
    },

    getById: async (req, res) => {
        let json = { error: "", result: {} };

        let empresa = req.params.id_empresa; 
        let empresas = await EmpresaService.getById(empresa);

        if (empresas) {
          json.result = empresas;
        }

        res.status(200);
        res.json(json);
    },

    addEmpresa: async (req, res) => {
        let empresa = req.body.nome;
        try {
            await EmpresaService.addEmpresa(empresa);
            res.status(201);
        } catch (error) {
            res.status(500);
        }
    },

    updateEmpresa: async (req, res) => {
        let json = { error: "", result: {} };
        let id_empresa = req.params.id_empresa;
        let empresa = req.body.nome;

        try {
            await EmpresaService.updateEmpresa(empresa,id_empresa);
            json.result = {
                empresa,
            }; 
        } catch (error) {
           res.json(error); 
        }
        res.json(json);
    },

    delEmpresa: async (req, res) => {
        let json = { error: "", result: {} };

        await EmpresaService.delEmpresa(req.params.id_empresa);
        res.status(204);
        res.json(json);
    },

}