const db = require('../db');

module.exports = {
    login: (email) =>{
        return new Promise((acepted, rejected)=>{
            db.query(`SELECT email, senha, status_usuario, nivel_acesso 
            FROM usuario WHERE email=?`, [email], (error, results)=>{
                if(error) { rejected(error); return;}
                return acepted(results);
            })
        })
    }

};
