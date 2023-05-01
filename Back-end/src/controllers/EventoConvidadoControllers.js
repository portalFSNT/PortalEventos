const EventoConvidadoService = require("../services/EventoConvidadoService");

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
}