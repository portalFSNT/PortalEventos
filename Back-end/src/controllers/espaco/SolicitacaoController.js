const SolicitacaoService = require('../../services/espaco/SolicitacaoService');

module.exports = {
    getAllSolicitacoes: async (req, res) => {
        let json = {error:'', result:{}};

        let solicitacao = await SolicitacaoService.getAllSolicitacoes();
        if(solicitacao) {
            json.result = solicitacao;
        }
        res.json(json);
    },

    getSolicitacaoById: async (req, res) => {
        let json = {error:'', result:{}};

        let id_solicitacao = req.params.id_solicitacao;
        let solicitacao = await SolicitacaoService.getSolicitacaoById(id_solicitacao);
        if(solicitacao) {
            json.result = solicitacao;
        }
        res.json(json);
    },

    addSolicitacao: async (req, res) => {
        let json = {error:'', result:{}};

        let status_solicitacao = req.body.status_solicitacao;
        let data_hora = req.body.data_hora;
        let descricao = req.body.descricao;
        let id_espaco = req.body.id_espaco;
        let id_usuario = req.body.id_usuario;

        try{
            await SolicitacaoService.addSolicitacao(status_solicitacao, data_hora, descricao, id_espaco, id_usuario);
            json.result = {
                status_solicitacao,
                data_hora,
                descricao,
                id_espaco,
                id_usuario
            }
        }catch(error){
            console.log(error)
        }
        res.json(json);
    },

    updateSolicitacao: async (req, res) => {
        let json = {error:'', result:{}};

        let id_solicitacao = req.params.id_solicitacao;
        let status_solicitacao = req.body.status_solicitacao;
        let data_hora = req.body.data_hora;
        let descricao = req.body.descricao;
        let id_espaco = req.body.id_espaco;
        let id_usuario = req.body.id_usuario;

        try{
            await SolicitacaoService.updateSolicitacao(id_solicitacao, status_solicitacao, data_hora, descricao, id_espaco, id_usuario);
            json.result = {
                id_solicitacao,
                status_solicitacao,
                data_hora,
                descricao,
                id_espaco,
                id_usuario
            }
        }catch(error){
            console.log(error);
        }
        res.json(json);
    },

    delSolicitacao: async (req, res) => {
        let json = {error:'', result:{}};

        await SolicitacaoService.delSolicitacao(req.params.id_solicitacao);
        res.json(json);
    }
}