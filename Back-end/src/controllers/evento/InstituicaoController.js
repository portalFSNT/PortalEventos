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
    }
}