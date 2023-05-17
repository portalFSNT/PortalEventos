const db = require("../../db");

module.exports = {
    getAll: () => {
        return new Promise((acepted, rejected) => {
            db.query(`SELECT e.descricao, e.data_hora, c.nome, c.email, c.cargo,c.telefone,ec.condicao,ec.anunciado,ec.presenca  
            FROM evento_convidado ec, convidado c, evento_presenca e 
            WHERE ec.id_presenca = e.id AND ec.id_convidado=c.id;`,(error, results)=>{
                if(error){
                    rejected(error);
                    return;
                }
                acepted(results);
            });
        });
    },

    getById: (id_evento) => {
        return new Promise((acepted, rejected) => {
            db.query(`SELECT ec.id_presenca, ec.id_convidado, ec.condicao, ec.anunciado, ec.presenca FROM evento_convidado ec INNER JOIN convidado c  ON c.id=ec.id_convidado 
            INNER JOIN  evento_presenca e ON e.id = ec.id_presenca WHERE e.id=?`,[id_evento], (error, results) => {
                if(error) { rejected(error); return; }
                if(results.length > 0){ 
                    acepted(results[0]);
                }else {
                    acepted(false);
                }
            });
        });
    },

    addEventoConvidado: (id_evento, id_convidado, condicao, anunciado, presenca) => {
        return new Promise((acepted, rejected) => {
            db.query(`INSERT INTO evento_convidado (id_presenca, id_convidado,condicao,anunciado,presenca) VALUES (?,?,?,?,?)`,
            [id_evento, id_convidado, condicao, anunciado, presenca],(error, results) => {
                if (error) {
                    rejected(error);
                    return;
                }
                acepted(results.addEvento);
            });
        });
    },

    updateEventoConvidado: (id_evento, id_convidado, condicao, anunciado, presenca) => {
        return new Promise((acepted, rejected) => {
            db.query(`UPDATE evento_convidado SET id_convidado=?,condicao=?,anunciado=?,presenca=? WHERE id_presenca=?`,
            [ id_convidado, condicao, anunciado, presenca, id_evento], (error, results) => {
                if(error){ 
                    rejected(error); 
                    return; 
                }
                acepted(results);
            });
        });
    },

    delEventoConvidado: (id_evento, id_convidado) => {
        return new Promise((acepted, rejected) => {
           db.query(`DELETE  FROM  evento_convidado  WHERE id_presenca =? AND id_convidado =?`,
           [ id_evento, id_convidado ],(error, results)=>{
                if(error){
                    rejected(error);
                    return;
                }
                acepted(results);
           });
        });
    },
}