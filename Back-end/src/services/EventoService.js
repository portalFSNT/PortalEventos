const db = require("../db");

module.exports = {

    getAll: () => {
        return new Promise((acepted, rejected) => {
            db.query(`SELECT e.*,SUM(if(ec.condicao = 'Pendente', 1, 0)) AS nao_confirmados,
            SUM(if(ec.condicao = 'Confirmado', 1, 0)) AS confirmados,
            SUM(if(ec.condicao = 'Negado', 1, 0)) AS nao_respondeu,
            SUM(if(ec.condicao is not null, 1, 0)) AS total  
            FROM evento_presenca e LEFT JOIN evento_convidado ec ON ec.id_presenca = e.id 
            GROUP BY e.id ORDER BY e.data_hora ASC;`,(error, results)=>{
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
            db.query(`SELECT e.*, 
            SUM(if(ec.condicao = 'Não confirmado', 1, 0)) AS nao_confirmados,        
            SUM(if(ec.condicao = 'Confirmado', 1, 0)) AS confirmados,        
            SUM(if(ec.condicao = 'Não respondeu', 1, 0)) AS nao_respondeu,        
            SUM(if(ec.condicao is not null, 1, 0)) AS total 
            FROM evento_presenca e LEFT JOIN evento_convidado ec ON ec.id_presenca = e.id 
            WHERE e.id=1 GROUP BY e.id ORDER BY e.data_hora ASC; `,(error, results) => {
                if(error) { rejected(error); return; }
                if(results.length > 0){ 
                    acepted(results[0]);
                }else {
                    acepted(false);
                }
            });
        });
    },

    addEvento: (nome, data_hora, descricao, id_usuario) => {
        return new Promise((acepted, rejected) => {
            db.query(`INSERT INTO evento_presenca (nome, data_hora,descricao,id_usuario) VALUES (?,?,?,?);`,[nome, data_hora, descricao, id_usuario],(error,results) => {
                if (error) {
                    rejected(error);
                    return;
                }
                acepted(results.addEvento);
            });
        });
    },
}