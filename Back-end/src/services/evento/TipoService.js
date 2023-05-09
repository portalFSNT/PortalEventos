const db = require('../../db');

module.exports = { 
    addTipo: (tipo) => {
        db(`INSERT INTO tipo (tipo) VALUES (?)`,[tipo],(error, results) => {
            if(error) { rejected(error); return;}
            acepted(results);
        });
    },

    updateTipo: (id) => {
        db(`UPDATE tipo SET tipo =? WHERE id =?`,[id],(error, results) => {
            if(error) { rejected(error); return;}
            acepted(results);
        });
    },
}