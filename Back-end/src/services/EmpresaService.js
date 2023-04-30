const db = require("../db"); 

module.exports = { 

    getAll: () => {
        return new Promise((acepted, reject)=>{
            db.query("SELECT empresa.nome FROM empresa", (error, results) => {
                if(error){
                    reject(error);
                    return;
                }
                acepted(results)
            });
        });
    }
    
}