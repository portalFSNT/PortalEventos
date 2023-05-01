const EventoService = require("../services/EventoService");

module.exports = {

    getAll: async(req, res) =>{
        let json = { error: "", result: [] };
        let evento = await EventoService.getAll();

        for(let i in evento){
            json.result.push({
                id_evento: evento[i].id,
                descricao: evento[i].descricao,
                data_hora: evento[i].data_hora.toGMTString(),
                confirmados:evento[i].confirmados,
                nao_respondeu:evento[i].nao_respondeu,
                total:evento[i].total,
        
                id_login: evento[i].id_login,
                login: evento[i].login,
            });
        }
        res.status(200);
        res.json(json);
    }

}