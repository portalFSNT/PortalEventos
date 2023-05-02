const EventService = require("../services/EventService");

module.exports = {
    getAllEvents: async (req, res) => {
        let json = {error:'', result:[]};

        let events = await EventService.getAllEvents();
        if(events) {
            json.result = events;
        }
        res.json(json);
    },

    getEventById: async (req, res) => {
        let json = {error:'', result:{}};

        let id_evento = req.params.id_evento;
        let event = await EventService.getEventById(id_evento);

        if(event) {
            json.result = event;
        }
        res.json(json);
    },

    addEvent: async (req, res) => {
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let descricao = req.body.descricao;
        let data_hora = req.body.data_hora;
        let id_usuario = req.body.id_usuario;
        let id_lugar = req.body.id_lugar;
        let id_tipo = req.body.id_tipo;
        let id_instituicao = req.body.id_instituicao;

        try{
            await EventService.addEvent(nome, descricao, data_hora, id_usuario, id_lugar, id_tipo, id_instituicao);
            json.result = {
                nome,
                descricao,
                data_hora,
                id_usuario,
                id_lugar,
                id_tipo,
                id_instituicao
            };
        }catch(error){
            console.log(error)
        }
        res.json(json);
    },

    updateEvent: async (req, res) => {
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let descricao = req.body.descricao;
        let data_hora = req.body.data_hora;
        let id_usuario = req.body.id_usuario;
        let id_lugar = req.body.id_lugar;
        let id_tipo = req.body.id_tipo;
        let id_instituicao = req.body.id_instituicao;
        let id = req.body.id_evento;

        try{
            await EventService.updateEvent(id, nome, descricao, data_hora, id_usuario, id_lugar, id_tipo, id_instituicao);
            json.result = {
                nome,
                descricao,
                data_hora,
                id_usuario,
                id_lugar,
                id_tipo,
                id_instituicao,
                id
            };
        }catch(error){
            console.log(error)
        }
        res.json(json);
        
    },

    delEvent: async (req, res) => {
        let json = {error:'', result:{}};

        await EventService.delEvent(req.params.id_evento);
        res.json(json);
    }

}