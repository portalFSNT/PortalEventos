const db = require('../../db');

module.exports = { 
    addTipo: (tipo) => {
        db(`INSERT INTO tipo (tipo) VALUES (?)`,[tipo],(error, results) => {
            if(error) { rejected(error); return;}
            acepted(results);
        });
    },
}