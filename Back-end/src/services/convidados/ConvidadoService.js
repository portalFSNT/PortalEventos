const db = require('../../db');

module.exports = {
  
    getAll: () => {
        return new Promise((acepted, rejected) => {
          db.query("SELECT convidado.nome, convidado.cargo, convidado.email, convidado.telefone, empresa.nome AS nome_empresa FROM convidado INNER JOIN empresa ON (convidado.id_empresa = empresa.id);", (error, results) => {         
            if (error) {
              rejected(error);
              return;
            }
            acepted(results);
          });
        });
      },
    getById: (id) => {
        return new Promise((acepted, rejected)=>{
            db.query("SELECT id, nome, email, cargo, telefone, id_empresa FROM convidado WHERE id =?", [id], (error, results) => {
                if(error) { rejected(error); return; }
                if(results.length > 0){ 
                    acepted(results[0]);
                }else {
                    acepted(false);
                }
            });
        });
    },
    addConvidado: (nome,email,cargo,telefone,empresa)=> {
        return new Promise((acepted, rejected)=> {

            db.query('INSERT INTO convidado (nome, email, cargo, telefone, id_empresa) VALUES (?,?,?,?,?);',
                [nome,email,cargo,telefone,empresa],
                (error, results)=>{
                    if(error){ rejected(error); return; }
                    acepted(results.addConvidado); 
                }
            );
        });
    },
    updateConvidado:(id,nome,email,cargo,telefone,empresa)=> {
        return new Promise((acepted, rejected)=> {
            db.query("UPDATE convidado SET nome =?, email =?, cargo =?, telefone =?, id_empresa =? WHERE id =?;",
                [nome,email,cargo,telefone,empresa,id],
                (error, results) => {
                    if(error){ rejected(error); return; }
                    acepted(results);
                }
            );
        });
    },

    delConvidado: (id)=> {
        return new Promise((acepted, rejected)=> {
            db.query('DELETE FROM convidado WHERE id =?',[id], (error, results ) =>{
                if(error){ rejected(error); return; }
                acepted(results);
            });
        });
    }   
};