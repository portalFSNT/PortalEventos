const EventoConvidadoService = require("../../services/convidados/EventoConvidadoService");

module.exports = {
    getAll: async(req, res) => {
        // console.log(req);
        let json = {error: '', result: []};
            
        try {
            let evento_convidados = await EventoConvidadoService.getAll();
            
            json.result = evento_convidados  

            res.status(200);
            res.json(json);
        } catch (error) {
            res.status(500);
        }
        console.log('Json getAll Convidados: '+JSON.stringify(json));
    },

    getById: async(req, res) => {
        console.log(req.params);
        let json = {error: '', result: []};
        let id_evento = req.params.id_evento;

        try {
            let evento = await EventoConvidadoService.getById(id_evento);   
            if (evento) {
                json.result = evento;
            }
            res.status(200);
            res.json(json);
            console.log(json.result);
        } catch (error) {
            res.status(500);
        }
        console.log('Convidado: '+res.json);
    },

    addEventoConvidado: async(req,res) => {
        let json = { error: "", result: [] };
        let id_presenca = req.body.id_presenca;
        let id_convidado = req.body.id_convidado;
        let condicao  = req.body.condicao;
        let anunciado = req.body.anunciado;
        let presenca = req.body.presenca;
        
        try {
            let evento_convidados = await EventoConvidadoService.addEventoConvidado(
                id_presenca,
                id_convidado,
                condicao,
                anunciado,
                presenca
            );
            json.result = {
                nome:evento_convidados,
                id_presenca,
                id_convidado,
                condicao,
                anunciado,
                presenca,
            };    
            res.status(201);
            res.json(json);
        } catch (error) {
            res.status(500);
            res.json({error: error});
        }
    },

    updateEventoConvidado: async(req, res) => {
        let id_evento = req.params.id_evento;
        let id_convidado = req.body.id_convidado;
        let condicao  = req.body.condicao;
        let anunciado = req.body.anunciado;
        let presenca = req.body.presenca;

        try {
            await EventoConvidadoService.updateEventoConvidado(
                id_evento,
                id_convidado,
                condicao,
                anunciado,
                presenca
            );
            json.result = {
                id_evento,
                id_convidado,
                condicao,
                anunciado,
                presenca,
            };
            res.status(200);
        } catch (error) {
            res.status(500);
            console.log(error);
        }
    },


    delEventoConvidado: async(req, res) => {
        let id_evento = req.params.id_evento;
        let id_convidado = req.body.id_convidado;

        try {
            await EventoConvidadoService.delEventoConvidado(id_evento, id_convidado);
            console.log('Convidado excluido do evento.');
            res.status(204);   
        } catch (error) {
            console.error(error);
            res.status(500);
            res.error(error);
        }
         
    },
}