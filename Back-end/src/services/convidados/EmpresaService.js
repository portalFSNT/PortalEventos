const db = require("../../db"); 

module.exports = { 

    getAll: () => {
        return new Promise((acepted, rejected) => {
            db.query("SELECT id, nome FROM empresa", (error, results) => {
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
          db.query("SELECT id, nome FROM empresa WHERE id = ?",[empresa],(error, results) => {
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
    },

    updateEmpresa: (nome,id) => {
        return new Promise((acepted, rejected) => {
            db.query("UPDATE empresa SET nome=? WHERE id =?",[nome,id],(error, results) => {
              if (error) {
                rejected(error);
                return;
              }
              acepted(results);
            });
        });
    },

    delEmpresa: (id) => {
        return new Promise((acepted, rejected) => {
            db.query("DELETE FROM empresa WHERE id =?",[id],(error,results)=>{
                if (error) {
                    rejected(error);
                    return;
                }
                acepted(results);
            });
        })
    },
    
}