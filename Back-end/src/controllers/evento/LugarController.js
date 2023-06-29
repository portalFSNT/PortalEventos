const LugarService = require('../../services/evento/LugarService');

module.exports = {

    getAll: async (req, res) => {
        let json = {error: '', result:{}};

        let lugar = await LugarService.getAll();

        if(lugar){
            json.result = lugar;
        }
        res.json(json);
    },

    getById: async (req, res) => {
        let json = {error: '', result:{}};

        let lugar_id = req.params.id;
        let lugar = await LugarService.getById();

        if(lugar){
            json.result = lugar;
        }
        res.json(json);
    },

    addLugar: async (req, res) => {
        let json = {error: '', result:{}};

        let nome = req.body.nome;

        try{
            await LugarService.addLugar(nome);
            json.result = {
                nome
            }
        }catch(error){
            console.log(error);
        }
        res.json(json);
    },

    updateLugar: async (req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id;
        let nome = req.body.nome;

        try{
            await LugarService.updateLugar(id, nome);
            json.result = {
                nome
            }
        }catch(error){
            console.log(error);
        }
        res.json(json);
    },

    delLugar: async (req, res) => {
        let json = {error:'', result:{}};

        await LugarService.delLugar(req.params.id);

        res.json(json);
    }

}