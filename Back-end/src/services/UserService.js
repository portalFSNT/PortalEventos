const db = require('../db');

module.exports = {
    getAll: () => {
        return new Promise((aceito, rejeitado)=>{
            db.query(`SELECT * FROM Usuario;`, (error, results)=>{
                if(error) { rejeitado(error); return;}
                aceito(results);
            });
        })
    }

}