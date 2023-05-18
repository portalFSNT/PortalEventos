const db  = require('../../db');

module.exports = {
    addInstituicao: ( nome ) => {
        return new Promise((acepted, rejected) => {
            db.query(`INSERT INTO instituicao (nome) VALUES (?)`,[nome], (err, result) => {
                if(err){ rejected(err); return; }
                acepted( result ); 
            });
        });
    }
}