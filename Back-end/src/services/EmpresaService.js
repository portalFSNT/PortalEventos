const db = require("../db"); 

module.exports = { 

    getAll: () => {
        return new Promise((acepted, rejected) => {
            db.query("SELECT nome FROM empresa", (error, results) => {
                if(error){
                    rejected(error);
                    return;
                }
                acepted(results)
            });
        });
    },
    getById: (empresa) => {
        return new Promise((acepted, rejected) => {
          db.query("SELECT nome FROM empresa WHERE id = ?",[empresa],(error, results) => {
              if (error) {
                rejected(error);
                return;
              }
              if (results.length > 0) {
                acepted(results[0]);
              } else {
                acepted(false);
              }
            }
          );
        });
    },
    addEmpresa: (empresa) => {
        return new Promise((acepted, rejected) =>{
            db.query("INSERT INTO empresa (nome) VALUES (?)",[empresa],(error,results) => {
                if (error) {
                    rejected(error);
                    return;
                }
                acepted(results.addEmpresa);
            });
        });
    }
}