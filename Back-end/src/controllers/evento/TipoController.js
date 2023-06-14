const TipoService = require('../../services/evento/TipoService');

module.exports = {
    getAll: async (req, res) => {
        let json = {error:'', results:[]};

        let tipos = await TipoService.getAll();

        if(tipos){
            json.results = tipos;
        }
        res.json(json);
    },

    getById: async(req, res) => {
        let json = {error:'', result:[]};

        let id = req.params.id;
        let tipo = await TipoService.getById(id);

        if(tipo){
            json.result = tipo;
        }
        res.json(json);
    }, 

    addTipo: async(req, res) => {
        let json = {error:'', result:[]};
        let tipo = req.body.tipo;

        try {
            await TipoService.addTipo(tipo);
            json.result = {
                tipo,
            }
        } catch (error) {
            console.log(error)
        }
        res.json(json);
    },

    updateTipo: async( req, res ) => {
        let json = {error:'', result:[]}
        let id = req.params.id;
        let tipo = req.body.tipo;

        try {
            await TipoService.updateTipo(tipo, id);
            json.result = {
                id,
                tipo,
            };
        } catch (error) {
            console.log(error); 
        }
        res.json(json);
    },

    delTipo: async( req, res ) => {
        let json = {error:'', result:[]};
        let id = req.params.id; 

        await TipoService.delTipo(id);

        res.json(json); 
    }
}