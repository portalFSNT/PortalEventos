const db = require("../db");

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
}