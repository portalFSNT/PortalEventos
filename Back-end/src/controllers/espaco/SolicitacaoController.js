const SolicitacaoService = require('../../services/espaco/SolicitacaoService');

function convertDate(date) {
    const parts = date.split('/');
    const year = parts[2];
    const month = parts[1];
    const day = parts[0];
    return year + '/' + month + '/' + day;
}

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

    getStatus: async (req, res) => {
        let json = {error:'', result:''};

        let solicitacao = await SolicitacaoService.getStatus();

        if(solicitacao) {
            json.result = solicitacao;
        }
        res.json(json);
    },

    addSolicitacao: async (req, res) => {
        let json = {error:'', result:{}};

        let status_solicitacao = req.body.status_solicitacao;
        let data_s = req.body.data_solicitacao
        let quantidade = req.body.quantidade
        let data_inicio = req.body.data_inicio;
        let data_termino = req.body.data_termino;
        let hora_inicio = req.body.hora_inicio;
        let hora_termino = req.body.hora_termino;
        let descricao = req.body.descricao;
        let id_espaco = req.body.id_espaco;
        let id_usuario = req.body.id_usuario;

        let data_solicitacao = convertDate(data_s);
        // let data_inicio = convertDate(data_i);
        // let data_termino = convertDate(data_t); 

        try{
            await SolicitacaoService.addSolicitacao(status_solicitacao, data_solicitacao, quantidade, data_inicio, data_termino, hora_inicio, hora_termino, descricao, id_espaco, id_usuario);
            json.result = {
                status_solicitacao,
                data_solicitacao,
                quantidade,
                data_inicio,
                data_termino,
                hora_inicio,
                hora_termino,
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
        let data_s = req.body.data_solicitacao;
        let quantidade = req.body.quantidade;
        let data_i = req.body.data_inicio;
        let data_t = req.body.data_termino;
        let hora_inicio = req.body.hora_inicio;
        let hora_termino = req.body.hora_termino;
        let descricao = req.body.descricao;
        let id_espaco = req.body.id_espaco;
        let id_usuario = req.body.id_usuario;

        let data_solicitacao = convertDate(data_s);
        let data_inicio = convertDate(data_i);
        let data_termino = convertDate(data_t); 

        try{
            await SolicitacaoService.updateSolicitacao(id_solicitacao, status_solicitacao, data_solicitacao, quantidade, data_inicio, data_termino, hora_inicio, hora_termino, descricao, id_espaco, id_usuario);
            json.result = {
                id_solicitacao,
                status_solicitacao,
                data_solicitacao,
                quantidade,
                data_inicio,
                data_termino,
                hora_inicio,
                hora_termino,
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