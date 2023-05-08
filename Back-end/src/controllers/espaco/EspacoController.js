const EspacoService = require("../../services/espaco/EspacoService");

module.exports = {
    getAllEspacos: async (req, res) => {
        let json = {error:'', result:[]};

        let espacos = await EspacoService.getAllEspacos();
        if (espacos) {
            json.result = espacos;
        }
        res.json(json);
    },

    getEspacoById: async (req, res) => {
        let json = {error:'', result:{}};

        let id_espaco = req.params.id_espaco;
        let espaco = await EspacoService.getEspacoById(id_espaco);

        if (espaco) {
            json.result = espaco
        }
        res.json(json);
    },

    addEspaco: async (req, res) => {
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let ponto_referencia = req.body.ponto_referencia;
        let descricao = req.body.descricao;

        try{
            await EspacoService.addEspaco(nome, ponto_referencia, descricao);
            json.result = {
                nome,
                ponto_referencia,
                descricao
            }
        }catch(error){
            console.log(error);
        }
        res.json(json);
    },

    updateEspaco: async (req, res) => {
        let json = {error:'', result:{}};

        let id_espaco = req.params.id_espaco;
        let nome = req.body.nome;
        let ponto_referencia = req.body.ponto_referencia;
        let descricao = req.body.descricao;

        try{
            await EspacoService.updateEspaco(id_espaco, nome, ponto_referencia, descricao);
            json.result = {
                id_espaco,
                nome,
                ponto_referencia,
                descricao
            }
        }catch(error){
            console.log(error);
        }
        res.json(json);
    },

    delEspaco: async (req, res) => {
        let json = {error:'', result:{}};

        await EspacoService.delEspaco(req.params.id_espaco);
        res.json(json);
    }
}