const db = require('../../db');

module.exports = {
    getAllEspacos: () => {
        return new Promise((acepted, rejected) => {

            db.query('SELECT * FROM espaco', (error, results) => {
                if(error) { rejected(error); return;}
                acepted(results);
            });
        });
    },

    getEspacoById: (id_espaco) => {
        return new Promise((acepted, rejected) => {

            db.query('SELECT * FROM espaco WHERE id = ?', [id_espaco], (error, results) => {
                if(error) { rejected(error); return;}
                acepted(results);
            });
        });
    },

    addEspaco: (nome, ponto_referencia, descricao) => {
        return new Promise((acepted, rejected) => {

            db.query('INSERT INTO espaco (nome, ponto_referencia, descricao) VALUES (?,?,?)',
            [nome, ponto_referencia, descricao], (error, results) => {
                if(error) { rejected(error); return;}
                acepted(results.insertId);
            });
        });
    },

    updateEspaco: (id_espaco, nome, ponto_referencia, descricao) => {
        return new Promise((acepted, rejected) => {

            db.query('UPDATE espaco SET nome = ?, ponto_referencia = ?, descricao = ? WHERE id = ?',
            [nome, ponto_referencia, descricao, id_espaco], (error, results) => {
                if(error) { rejected(error); return;}
                acepted(results.updateEspaco);
            });
        });
    },

    delEspaco: (id_espaco) => {
        return new Promise((acepted, rejected) => {

            db.query('DELETE FROM espaco WHERE id = ?', [id_espaco], (error, results) => {
                if(error) { rejected(error); return;}
                acepted(results.delEspaco);
            });
        });
    }
}