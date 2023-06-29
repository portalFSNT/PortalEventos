const EmpresaService = require("../../services/convidados/EmpresaService");

module.exports = {

    getAll: async(req, res) => {
        let json = { error: "", result: [] };
        let empresas = await EmpresaService.getAll();

        if (empresas){
            json.result=empresas    
        }
        res.status(200);
        res.json(json);
    },

    getById: async (req, res) => {
        let json = { error: "", result: {} };

        let empresa = req.params.id; 
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
        let json = { result: {} };
        let id = req.params.id;
        let empresa = req.body.nome;

        try {
            await EmpresaService.updateEmpresa(empresa,id);
            json.result = {
                empresa,
            }; 
            res.status(200);
            res.json(json);
        } catch (error) {
           res.status(500); 
        }
        
    },

    delEmpresa: async (req, res) => {
        try {
            await EmpresaService.delEmpresa(req.params.id);
            res.status(204);
        } catch (error) {
            res.status(500);
        }
    },

}