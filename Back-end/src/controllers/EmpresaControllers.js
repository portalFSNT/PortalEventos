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
    }
}