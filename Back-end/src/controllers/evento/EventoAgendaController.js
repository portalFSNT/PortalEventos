const EventService = require("../../services/evento/EventoAgendaService");

function convertDate(date) {
    const parts = date.split('/');
    const year = parts[2];
    const month = parts[1];
    const day = parts[0];
    return year + '/' + month + '/' + day;
}

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
        let data_i = req.body.data_inicio;
        let data_t = req.body.data_termino;
        let hora_inicio = req.body.hora_inicio;
        let hora_termino = req.body.hora_termino;
        let id_usuario = req.body.id_usuario;
        let id_lugar = req.body.id_lugar;
        let id_tipo = req.body.id_tipo;
        let id_instituicao = req.body.id_instituicao;

        let data_inicio = convertDate(data_i);
        let data_termino = convertDate(data_t); 

        try{
            await EventService.addEvent(nome, descricao, data_inicio, data_termino, hora_inicio, hora_termino, id_usuario, id_lugar, id_tipo, id_instituicao);
            json.result = {
                nome,
                descricao,
                data_inicio,
                data_termino,
                hora_inicio,
                hora_termino,
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

    updateEvent: async (req, res) =>{
        let json = {error:'', result:{}};

        let id_evento = req.params.id_evento;
        let nome = req.body.nome;
        let descricao = req.body.descricao;
        let data_i = req.body.data_inicio;
        let data_t = req.body.data_termino;
        let hora_inicio = req.body.hora_inicio;
        let hora_termino = req.body.hora_termino;
        let id_usuario = req.body.id_usuario;
        let id_lugar = req.body.id_lugar;
        let id_tipo = req.body.id_tipo;
        let id_instituicao = req.body.id_instituicao;

        let data_inicio = convertDate(data_i);
        let data_termino = convertDate(data_t);

        try {
            await EventService.updateEvent(
                nome,
                descricao,
                data_inicio,
                data_termino,
                hora_inicio,
                hora_termino,
                id_usuario,
                id_lugar, 
                id_tipo,
                id_instituicao,
                id_evento
            );
            json.result = {
                nome, 
                descricao,
                data_inicio,
                data_termino,
                hora_inicio,
                hora_termino,
                id_usuario,
                id_lugar,
                id_tipo,
                id_instituicao
            }
            res.status(200);
            res.json(json);
        } catch (error) {
            res.status(400);
            res.json({error: error + " Campo(s) não enviado(s) ou inválido(s)."})
        }
    },

    delEvent: async (req, res) => {
        let json = {error:'', result:{}};

        await EventService.delEvent(req.params.id_evento);
        res.json(json);
    }

}