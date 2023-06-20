const EventoService = require("../../services/convidados/EventoPresencaService");

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
    },

    getById: async(req,res) =>{
        let json = { error: "", result: {} };
        let id_evento = req.params.id_evento;
        let evento = await EventoService.getById(id_evento);

        if (evento) {
            json.result = evento;
          }
        res.status(200);
        res.json(json);
    },

    addEvento: async(req, res) => {
        let nome = req.body.nome;
        let data_hora = req.body.data_hora;
        let descricao = req.body.descricao;
        let id_usuario = req.body.id_usuario;

        console.log(req.body);

        try {
            await EventoService.addEvento(
                nome,
                data_hora,
                descricao,
                id_usuario
            );
            res.status(201);
        } catch (error) {
            res.status(500);   
        }          
    },

    updateEvento: async(req, res) => {
        let json = { error: "", result: {} };
        let id_evento = req.params.id_evento;
        let data_hora = req.body.data_hora;
        let descricao = req.body.descricao;

        if(id_evento && data_hora && descricao){
            await EventoService.updateEvento(
                id_evento,
                data_hora,
                descricao
            );
            json.result = {
                id_evento,
                data_hora,
                descricao,
            };
        }else {
            res.status(400);
            res.json({ error: "Campos não enviados ou inválidos." });
        }
        res.json(json);
    },

    delEvento: async(req,res)=>{
        let json = { error: "", result: {} };
        
        await EventoService.delEvento(req.params.id_evento);
        res.status(204);
        res.json(json);
    },
    
}