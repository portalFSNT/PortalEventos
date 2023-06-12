const { reject } = require('bcrypt/promises');
const db = require('../../db');

module.exports = {

    getAll: () => {
        return new Promise((acepted, rejected) => {
            db.query('SELECT * FROM lugar', (error, results) => {
                if(error) { rejected(error); return; }
                acepted(results);
            });
        });
    },

    getById: (lugar_id) => {
        return new Promise((acepted, rejected) => {
            db.query('SELECT * FROM lugar WHERE id = ?', [lugar_id], (error, results) => {
                if(error) { rejected(error); return }
                acepted(results);
            });
        });
    },

    addLugar: (nome) => {
        return new Promise((acepted, rejected) => {
            db.query('INSERT INTO lugar (nome) VALUES (?)', [nome], (error, results) => {
                if(error) { rejected(error); return }
                acepted(results.insertId);
            });
        });
    },

    updateLugar: (lugar_id, nome) => {
        return new Promise((acepted, rejected) => {
            db.query('UPDATE lugar SET nome = ? WHERE id = ?', [nome, lugar_id], (error, results) => {
                if(error) { rejected(error); return }
                acepted(results.updateId);
            });
        });
    },

    delLugar: (lugar_id) => {
        return new Promise((acepted, rejected) => {
            db.query('DELETE FROM lugar WHERE id = ?', [lugar_id], (error, results) => {
                if(error) { rejected(error); return }
                acepted(results);
            });
        });
    }

}