const EmpresaService = require("../services/EmpresaService");

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
    
        let empresa = req.params.id_empresa; //para pegar o parametro
        let empresas = await EmpresaService.getById(empresa);
    
        if (empresas) {
          json.result = empresas;
        }

        res.status(200);
        res.json(json);
    },

    addEmpresa: async (req, res) => {
        let json = { error: "", result: {} };
        let empresa = req.body.nome;

        try {
            await EmpresaService.addEmpresa(empresa);
            json.result = {
                empresa
            };
        } catch (error) {
            json.error = "Campos não enviados";
        }
        res.status(201);
        res.json(json);
    },

    updateEmpresa: async (req, res) => {
        let json = { error: "", result: {} };
        let empresas = req.params.empresa;
        let empresa = req.body.nome;
      
        try {
            await EmpresaService.updateEmpresa(empresa,empresas);
            json.result = {
                empresa,
            }; 
        } catch (error) {
           res.json(error); 
        }
        res.json(json);
      },

}