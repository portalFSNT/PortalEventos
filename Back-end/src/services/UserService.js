const db = require('../db');

module.exports = {

    getAll: () => {
        return new Promise((acepted, rejected) => {
            db.query(`SELECT id, nome, email, senha, login, cargo, telefone, nivel_acesso, status_usuario, id_instituicao FROM usuario;`, (error, results)=>{
                if(error) { rejected(error); return;}
                acepted(results);
            });
        })
    },

    getById: (email) => {
        return new Promise((acepted, rejected) => {

            db.query(`SELECT id, nome, email, senha, login, cargo, telefone, nivel_acesso, status_usuario, id_instituicao FROM usuario WHERE email = ?`, [email], (error, results) => {
                if (error) { rejected(error); return; }
                if(results.length > 0) {
                    acepted(results[0]);
                }else{
                    acepted(false);
                }
            });

        });
    },

    addUser: (nome, email, senha, login, cargo, telefone, nivelAcesso, statusUsuario, instituicao) => {
        return new Promise(async (acepted, rejected) => {
            
            db.query('INSERT INTO usuario (nome, email, senha, login, cargo, telefone, nivel_acesso, status_usuario, id_instituicao) VALUES(?,?,?,?,?,?,?,?,?)',
                [nome, email, senha, login, cargo, telefone, nivelAcesso, statusUsuario, instituicao],
                (error, results) => {
                    if (error) { rejected(error); return; }
                    acepted(results.isertId);
                }
            
            ); 

        });
    },

    updateUser: (nome, email, senha, login, cargo, telefone, nivelAcesso, statusUsuario, instituicao) => {
        return new Promise((acepted, rejected) => {
            
            db.query('UPDATE usuario SET nome = ?, email = ?, senha = ?, login = ?, cargo = ?, telefone = ?, nivel_acesso = ?, status_usuario = ?, id_instituicao = ? WHERE email = ?',
                [nome, email, senha, login, cargo, telefone, nivelAcesso, statusUsuario, instituicao, email],
                (error, results) => {
                    if (error) { rejected(error); return; }
                    acepted(results);
                }
            );
        });
    },

    delUser: (email) => {
        return new Promise((acepted, rejected) => {

            db.query('DELETE FROM usuario WHERE email = ?', [email], (error, results) => {
                if (error) { rejected(error); return; }
                acepted(results);
            });
        });
    },

    login: (email) =>{
        return new Promise((acepted, rejected)=>{
            db.query(`SELECT email, senha, status_usuario, nivel_acesso 
            FROM usuario WHERE email=?`, [email], (error, results)=>{
                if(error) { rejected(error); return;}
                return acepted(results);
            })
        })
    }


