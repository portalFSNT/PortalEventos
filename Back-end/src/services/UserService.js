const { reject } = require('bcrypt/promises');
const db = require('../db');

module.exports = {

    getAll: () => {
        return new Promise((acepted, rejected) => {
            db.query(`
            SELECT usuario.id, usuario.nome, usuario.email, usuario.senha, usuario.cargo, usuario.telefone, usuario.nivel_acesso, usuario.status_usurio, usuario.id_instituicao, instituicao.nome as nome_instituicao 
              FROM usuario
        INNER JOIN instituicao
                ON (instituicao.id = usuario.id_instituicao);`, (error, results)=>{
                if(error) { rejected(error); return;}
                acepted(results);
            });
        })
    },

    getById: (email) => {
        return new Promise((acepted, rejected) => {

            db.query(`
          SELECT usuario.id, usuario.nome, usuario.email, usuario.senha, usuario.cargo, usuario.telefone, usuario.nivel_acesso, usuario.status_usurio, usuario.id_instituicao, instituicao.nome as nome_instituicao 
            FROM usuario
      INNER JOIN instituicao
              ON (instituicao.id = usuario.id_instituicao)
           WHERE usuario.email = ?;`, [email], (error, results) => {
                if (error) { rejected(error); return; }
                if(results.length > 0) {
                    acepted(results[0]);
                }else{
                    acepted(false);
                }
            });

        });
    },

    getStatus: () => {
        return new Promise((acepted, rejected) => {
            db.query(`
            SELECT usuario.id, usuario.nome, usuario.email, usuario.senha, usuario.cargo, usuario.telefone, usuario.nivel_acesso, usuario.status_usurio, usuario.id_instituicao, instituicao.nome as nome_instituicao 
                FROM usuario
        INNER JOIN instituicao
                ON (instituicao.id = usuario.id_instituicao) 
            WHERE usuario.status_usurio = 0;`, (error, results)=>{
                if(error) { rejected(error); return; }
                acepted(results)
            });
        });
    },

    addUser: (nome, email, senha, cargo, telefone, nivelAcesso, statusUsuario, instituicao) => {
        return new Promise(async (acepted, rejected) => {
            
            db.query('INSERT INTO usuario (nome, email, senha, cargo, telefone, nivel_acesso, status_usurio, id_instituicao) VALUES(?,?,?,?,?,?,?,?)',
                [nome, email, senha, cargo, telefone, nivelAcesso, statusUsuario, instituicao],
                (error, results) => {
                    if (error) { rejected(error); return; }
                    acepted(results.isertId);
                }
            
            ); 

        });
    },

    updateUser: (emailp, nome, email, cargo, telefone, nivelAcesso, statusUsuario, instituicao) => {
        return new Promise((acepted, rejected) => {
            
            db.query('UPDATE usuario SET nome = ?, email = ?, cargo = ?, telefone = ?, nivel_acesso = ?, status_usurio = ?, id_instituicao = ? WHERE email = ?',
                [nome, email, cargo, telefone, nivelAcesso, statusUsuario, instituicao, emailp],
                (error, results) => {
                    if (error) { rejected(error); return; }
                    acepted(results);
                }
            );
        });
    },

    updateStatusUser: (email, nivelAcesso) => {
        return new Promise((acepted, rejected) => {
            db.query('UPDATE usuario SET status_usurio =? WHERE email=?',
            [nivelAcesso, email], (error, result) => {
                if(error){ rejected(error); return;}
                acepted(result);
            })
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
            db.query(`SELECT email, senha, status_usurio, nivel_acesso 
            FROM usuario WHERE email=?`, [email], (error, results)=>{
                if(error) { rejected(error); return;}
                return acepted(results);
            })
        })
    }
}
