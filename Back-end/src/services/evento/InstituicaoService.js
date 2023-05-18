const db  = require('../../db');

module.exports = {

    getAll: () => {
        return new Promise((acepted, rejected) => {
            db.query(`SELECT id, nome FROM instituicao`, (err, results) => {
                if(err){ rejected(err); return; }
                acepted( results );
            });
        });
    },

    addInstituicao: ( nome ) => {
        return new Promise((acepted, rejected) => {
            db.query(`INSERT INTO instituicao (nome) VALUES (?)`,[nome], (err, result) => {
                if(err){ rejected(err); return; }
                acepted( result ); 
            });
        });
    }
}