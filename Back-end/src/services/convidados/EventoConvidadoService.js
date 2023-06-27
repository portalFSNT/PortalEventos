const db = require("../../db");

module.exports = {
    getAll: () => {
        return new Promise((acepted, rejected) => {
            db.query(`SELECT evento_convidado.id_presenca, evento_convidado.id_convidado, evento_convidado.condicao, evento_convidado.anunciado, evento_convidado.presenca, convidado.nome, convidado.cargo, convidado.email, convidado.telefone, convidado.id_empresa, empresa.nome AS nome_empresa 
            FROM evento_convidado
        INNER JOIN convidado
                ON convidado.id = evento_convidado.id_convidado 
        INNER JOIN evento_presenca 
                ON evento_presenca.id = evento_convidado.id_presenca
        INNER JOIN empresa
                ON empresa.id = convidado.id_empresa;`,(error, results)=>{
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
            db.query(`SELECT evento_convidado.id_presenca, evento_convidado.id_convidado, evento_convidado.condicao, evento_convidado.anunciado, evento_convidado.presenca, convidado.nome, convidado.cargo, convidado.email, convidado.telefone, convidado.id_empresa, empresa.nome as nome_empresa 
            FROM evento_convidado
      INNER JOIN convidado   
              ON convidado.id = evento_convidado.id_convidado 
      INNER JOIN evento_presenca 
              ON evento_presenca.id = evento_presenca.id 
      INNER JOIN empresa
              ON empresa.id = convidado.id_empresa
           WHERE evento_convidado.id_presenca=?`,[id_evento], (error, results) => {
                if(error) { rejected(error); return; }
                if(results.length > 0){ 
                    acepted(results[0]);
                }else {
                    acepted(false);
                }
            });
        });
    },

    addEventoConvidado: (id_presenca, id_convidado, condicao, anunciado, presenca) => {
        return new Promise((acepted, rejected) => {
            db.query(`INSERT INTO evento_convidado (id_presenca, id_convidado,condicao,anunciado,presenca) VALUES (?,?,?,?,?)`,
            [id_presenca, id_convidado, condicao, anunciado, presenca],(error, results) => {
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
            [id_convidado, condicao, anunciado, presenca, id_evento], (error, results) => {
                if(error){ 
                    rejected(error); 
                    return(error); 
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