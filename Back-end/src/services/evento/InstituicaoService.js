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

    getById: (id) => {
        return new Promise((acepted, rejected) => {
            db.query(`SELECT id, nome FROM instituicao WHERE id=?`,[id], (err, result) => {
                if(err){ rejected(err); return;}
                if(result.length > 0) {
                    acepted(result[0]);
                }else{
                    acepted(false);
                }
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
    },

    updateInstituicao: ( id, nome ) => {
        return new Promise((acepted, rejected) => {
            db.query(`UPDATE instituicao SET nome =? WHERE id =?`, [nome, id], (err, result) =>{
                if(err){ rejected(err); return; }
                acepted( result );
            });
        });
    },

    delInstituicao: (id) => {
        return new Promise((acepted, rejected) => {
            db.query(`DELETE FROM instituicao WHERE id=?`,[id], (err, result) => {
                if(err){ rejected(err);  return; }
                acepted(result);
            });
        });
    }
}