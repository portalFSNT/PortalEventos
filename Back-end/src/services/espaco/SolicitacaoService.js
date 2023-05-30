const db = require('../../db');

module.exports = {
    getAllSolicitacoes: () => {
        return new Promise((acepted, rejected) => {

            db.query(`
          SELECT solicitacao.id, solicitacao.status_solicitacao, solicitacao.data_solicitacao, solicitacao.quantidade, solicitacao.data_inicio, solicitacao.data_termino, solicitacao.hora_inicio, solicitacao.hora_termino,  solicitacao.descricao, solicitacao.id_espaco, solicitacao.id_usuario, espaco.nome as espaco_nome, usuario.nome as usuario_nome
            FROM solicitacao
      INNER JOIN espaco
              ON (espaco.id = solicitacao.id_espaco)
      INNER JOIN usuario
              ON (usuario.id = solicitacao.id_usuario)`, (error, results) => {
                if(error) { rejected(error); return;}
                acepted(results);
            });
        });
    },

    getSolicitacaoById: (id_solicitacao) => {
        return new Promise((acepted, rejected) => {

            db.query(`
          SELECT solicitacao.id, solicitacao.status_solicitacao, solicitacao.data_solicitacao, solicitacao.quantidade, solicitacao.data_inicio, solicitacao.data_termino, solicitacao.hora_inicio, solicitacao.hora_termino,  solicitacao.descricao, solicitacao.id_espaco, solicitacao.id_usuario, espaco.nome as espaco_nome, usuario.nome as usuario_nome
            FROM solicitacao
      INNER JOIN espaco
              ON (espaco.id = solicitacao.id_espaco)
      INNER JOIN usuario
              ON (usuario.id = solicitacao.id_usuario)
           WHERE solicitacao.id = ?;`, [id_solicitacao], (error, results) => {
            if(error) { rejected(error); return;}
            acepted(results);
           });
        });
    },

    addSolicitacao: (status_solicitacao, data_solicitacao, quantidade, data_inicio, data_termino, hora_inicio, hora_termino, descricao, id_espaco, id_usuario) => {
        return new Promise((acepted, rejected) => {

            db.query('INSERT INTO solicitacao (status_solicitacao, data_solicitacao, quantidade, data_inicio, data_termino, hora_inicio, hora_termino, descricao, id_espaco, id_usuario) VALUE (?,?,?,?,?,?,?,?,?,?)',
            [status_solicitacao, data_solicitacao, quantidade, data_inicio, data_termino, hora_inicio, hora_termino, descricao, id_espaco, id_usuario], (error, results) => {
                if(error) { rejected(error); return;}
                acepted(results.insertId);
            });
        });
    },

    updateSolicitacao: (id_solicitacao, status_solicitacao, data_solicitacao, quantidade, data_inicio, data_termino, hora_inicio, hora_termino, descricao, id_espaco, id_usuario) => {
        return new Promise((acepted, rejected) => {

            db.query('UPDATE solicitacao SET status_solicitacao = ?, data_solicitacao = ?, quantidade = ?, data_inicio = ?, data_termino = ?, hora_inicio = ?, hora_termino = ?, descricao = ?, id_espaco = ?, id_usuario = ? WHERE id = ?',
            [status_solicitacao, data_solicitacao, quantidade, data_inicio, data_termino, hora_inicio, hora_termino, descricao, id_espaco, id_usuario, id_solicitacao], (error, results) => {
                if(error) { rejected(error); return;}
                acepted(results.updateId);
            });
        });
    },

    delSolicitacao: (id_solicitacao) => {
        return new Promise((acepted, rejected) => {

            db.query('DELETE FROM solicitacao WHERE id = ?', [id_solicitacao], (error, results) => {
                if(error) { rejected(error); return;}
                acepted(results.delSolicitacao);
            });
        });
    }
}