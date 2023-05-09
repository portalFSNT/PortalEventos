const db = require('../../db');

module.exports = { 

    getAll: () => {
        return new Promise((acepted, rejected) => {
            db.query(`SELECT id, tipo FROM tipo`, (error, results) => {
                if(error) { rejected(error); return;}
                acepted(results);
            });
        });
    },

    addTipo: (tipo) => {
        return new Promise((acepted, rejected) => {
            db.query(`INSERT INTO tipo (tipo) VALUES (?)`,[tipo],(error, results) => {
                if(error) { rejected(error); return;}
                acepted(results);
            });
        });
    },

    updateTipo: (id) => {
        return new Promise((acepted, rejected) => {
            db.query(`UPDATE tipo SET tipo =? WHERE id =?`,[id],(error, results) => {
                if(error) { rejected(error); return;}
                acepted(results);
            });
        });
    },

    delTipo: (id) => {
        return new Promise((acepted, rejected) => {
            db.query(`DELETE FROM tipo WHERE id =?`,[id],(error, results) => {
                if(error) { rejected(error); return;}
                acepted(results);
            });
        });
    },
}