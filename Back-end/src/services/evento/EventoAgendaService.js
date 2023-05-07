const db = require('../../db');

module.exports = {
    getAllEvents: () => {
        return new Promise((acepted, rejected) => {
            db.query('SELECT * FROM evento_agenda', (error, results)=>{
                if(error) { rejected(error); return; }
                acepted(results);
            });
        });
    },

    getEventById: (id_evento) => {
        return new Promise((acepted, rejected) => {
            db.query(`SELECT evento_agenda.id, evento_agenda.nome as nome_evento, evento_agenda.descricao, evento_agenda.data_hora, evento_agenda.id_usuario, evento_agenda.id_lugar, evento_agenda.id_tipo, lugar.nome as nome_lugar, tipo.tipo
            FROM evento_agenda
      INNER JOIN lugar 
              ON (lugar.id = evento_agenda.id_lugar)
      INNER JOIN tipo
              ON (tipo.id = evento_agenda.id_tipo)
           WHERE evento_agenda.id = ?`, [id_evento], (error, results) => {
                if(error) { rejected(error); return; }
                if(results.length > 0) {
                    acepted(results[0]);
                }else{
                    acepted = (false);
                }
                
              });
        });
    },

    addEvent: (nome, descricao, data_hora, id_usuario, id_lugar, id_tipo, id_instituicao) => {
        return new Promise((acepted, rejected) => {

            db.query('INSERT INTO evento_agenda (nome, descricao, data_hora, id_usuario, id_lugar, id_tipo, id_instituicao) VALUES (?,?,?,?,?,?,?)',
            [nome, descricao, data_hora, id_usuario, id_lugar, id_tipo, id_instituicao], (error, results) => {
                if(error) { rejected(error); return;}
                acepted(results.insertId);
            });
        });
    },

    updateEvent: (nome, descricao, data_hora, id_usuario, id_lugar, id_tipo, id_instituicao, id_evento) => {
        return new Promise((acepted, rejected) => {

            db.query('UPDATE evento_agenda SET nome = ?, descricao = ?, data_hora = ?, id_usuario = ?, id_lugar = ?, id_tipo = ?, id_instituicao = ? WHERE id = ?',
            [nome, descricao, data_hora, id_usuario, id_lugar, id_tipo, id_instituicao, id_evento], (error, results) => {
                if(error) { rejected(error); return;}
                acepted(results);
            });
        });
    },

    delEvent: (id_evento) => {
        return new Promise((acepted, rejected) => {

            db.query('DELETE FROM evento_agenda WHERE id = ?', [id_evento], (error, results) => {
                if(error) { rejected(error); return;}
                acepted(results);
            });
        });
    }
}