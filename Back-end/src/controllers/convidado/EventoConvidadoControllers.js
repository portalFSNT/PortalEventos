const EventoConvidadoService = require("../../services/convidado/EventoConvidadoService");

module.exports = {
    getAll: async(req, res) => {
        let json = { error: "", result: [] };
        let evento_convidados = await EventoConvidadoService.getAll();

        for (let i in evento_convidados) {
          json.result.push({
            data_hora:evento_convidados[i].data_hora,
            descricao:evento_convidados[i].descricao,
            nome:evento_convidados[i].nome,
            cargo:evento_convidados[i].cargo,
            empresa:evento_convidados[i].empresa,
            telefone:evento_convidados[i].telefone,
            condicao: evento_convidados[i].condicao,
            anunciados: evento_convidados[i].anunciado,
            presenca: evento_convidados[i].presenca,                        
          });
        }
        res.status(200);
        res.json(json);
    },

    getById: async(req, res) => {
        let json = { error: "", result: [] };
        let id_evento = req.params.id_evento;

        let evento = await EventoConvidadoService.getById(id_evento);

        if (evento) {
            json.result = evento;
          }
        res.status(200);
        res.json(json);
    },

    addEventoConvidado: async(req,res) => {
        let json = { error: "", result: [] };
        let id_evento = req.params.id_evento;
        let id_convidado = req.body.id_convidado;
        let condicao  = req.body.condicao;
        let anunciado = req.body.anunciado;
        let presenca = req.body.presenca;

        if (id_evento && id_convidado && condicao && anunciado && presenca){
            let evento_convidados = await EventoConvidadoService.addEventoConvidado(
                id_evento,
                id_convidado,
                condicao,
                anunciado,
                presenca
            );
            json.result = {
                nome:evento_convidados,
                id_evento,
                id_convidado,
                condicao,
                anunciado,
                presenca,
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    updateEventoConvidado: async(req, res) => {
        let json = { error: "", result: [] };
        let id_evento = req.params.id_evento;
        let id_convidado = req.body.id_convidado;
        let condicao  = req.body.condicao;
        let anunciado = req.body.anunciado;
        let presenca = req.body.presenca;

        if (id_evento && id_convidado && condicao && anunciado && presenca){
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
        }else{
            res.status(400);
            res.json({ error: "Campos não enviados ou inválidos." });
        }
        res.json(json);
    },

    delEventoConvidado: async(req, res) => {
        let json = { error: "", result: [] };
        let id_evento = req.params.id_evento;
        let id_convidado = req.body.id_convidado;

        await EventoConvidadoService.delEventoConvidado(id_evento, id_convidado);
        res.status(204);
        res.json(json); 
    },
}