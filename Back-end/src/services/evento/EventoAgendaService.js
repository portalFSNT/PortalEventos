const db = require('../../db');

module.exports = {
    getAllEvents: () => {
        return new Promise((acepted, rejected) => {
            db.query(`
          SELECT evento_agenda.id, evento_agenda.nome as nome, evento_agenda.descricao, evento_agenda.data_inicio, evento_agenda.data_termino, evento_agenda.hora_inicio, evento_agenda.hora_termino, evento_agenda.endereco, evento_agenda.id_usuario, evento_agenda.id_lugar, evento_agenda.id_tipo, evento_agenda.id_instituicao, lugar.nome as nome_lugar, tipo.tipo, instituicao.nome as nome_instituicao
            FROM evento_agenda
      INNER JOIN lugar 
              ON (lugar.id = evento_agenda.id_lugar)
      INNER JOIN tipo
              ON (tipo.id = evento_agenda.id_tipo)
      INNER JOIN instituicao
              ON (instituicao.id = evento_agenda.id_instituicao)
        ORDER BY data_inicio`, (error, results)=>{
                if(error) { rejected(error); return; }
                acepted(results);
            });
        });
    },

    getEventById: (id_evento) => {
        return new Promise((acepted, rejected) => {
            db.query(`SELECT evento_agenda.id, evento_agenda.nome as nome_evento, evento_agenda.descricao, evento_agenda.data_inicio, evento_agenda.data_termino, evento_agenda.hora_inicio, evento_agenda.hora_termino, evento_agenda.endereco, evento_agenda.id_usuario, evento_agenda.id_lugar, evento_agenda.id_tipo, lugar.nome as nome_lugar, tipo.tipo
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

    addEvent: (nome, descricao, data_inicio, data_termino, hora_inicio, hora_termino, endereco, id_usuario, id_lugar, id_tipo, id_instituicao) => {
        return new Promise((acepted, rejected) => {

            db.query('INSERT INTO evento_agenda (nome, descricao, data_inicio, data_termino, hora_inicio, hora_termino, endereco, id_usuario, id_lugar, id_tipo, id_instituicao) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
            [nome, descricao, data_inicio, data_termino, hora_inicio, hora_termino, endereco, id_usuario, id_lugar, id_tipo, id_instituicao], (error, results) => {
                if(error) { rejected(error); return;}
                acepted(results.insertId);
            });
        });
    },

    updateEvent: (nome, descricao, data_inicio, data_termino, hora_inicio, hora_termino, endereco, id_usuario, id_lugar, id_tipo, id_instituicao, id_evento) => {
        return new Promise((acepted, reject) => {
            db.query(`UPDATE evento_agenda SET nome =?, descricao =?, data_inicio =?, data_termino =?, hora_inicio =?, hora_termino =?, endereco = ?, id_usuario =?, id_lugar =?, id_tipo =?, id_instituicao =? WHERE id =?`,
            [nome, descricao,data_inicio, data_termino, hora_inicio, hora_termino, endereco, id_usuario, id_lugar, id_tipo, id_instituicao, id_evento], (err, result) => {
                if(err){ reject(err); result;}
                acepted(result);
            })
            
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