const InstituicaoService = require('../../services/evento/InstituicaoService');

module.exports = {

    getAll: async (req, res) => {
        let json = { error:'', results:[] }

        try {
            let instituicoes = await InstituicaoService.getAll();

            if(instituicoes){
                json.results = instituicoes;
            } 
            
        } catch (error) {
            json.results = {error: error}
        }
        res.json(json); 
    },

    getById: async (req, res) => {
        let json = { error:'', result:[] }
        let id = req.params.id;

        try {
            let instituicao = await InstituicaoService.getById(id);
            
            if(instituicao){
                json.result = { instituicao };    
            }
            
        } catch (error) {
            json.result = { error: error }
        }
        res.json(json);
    },

    addInstituicao: async(req, res) => {
        let json = { error:'', result:[] }

        let nome = req.body.nome;

        try {
            await InstituicaoService.addInstituicao(nome);

            json.result = { nome };

            res.status(200);
            res.json(json); 

        } catch (error) {
            res.status(400);
            res.json({error:"Campo(s) não enviado(s) ou inválido(s)"});
        }
    },

    updateInstituicao: async(req, res) => {
        let json = { error:'', result:[] }

        let id = req.params.id;
        let nome = req.body.nome; 

        try {
            await InstituicaoService.updateInstituicao(id, nome);
            json.result = { 
                id, 
                nome 
            };
        } catch (error) {
            json.error(error);
        }
        res.json(json);
    },

    delInstituicao: async(req,res) => {
        let json = { error:'', result:[] }

        let id = req.params.id;

        try {
            await InstituicaoService.delInstituicao(id);
        } catch (error) {
            json.error(error);
        }
        res.json(json);
    }
}