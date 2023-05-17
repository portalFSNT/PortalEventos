const db = require('../../db');

module.exports = {
    getAllImages: () => {
        return new Promise((acepted, rejected) => {
            
            db.query(`
          SELECT imagem.id, imagem.link, imagem.nome, imagem.tipo, imagem.id_agenda, evento_agenda.nome as evento_nome
            FROM imagem
      INNER JOIN evento_agenda
              ON (evento_agenda.id = imagem.id_agenda)`, (error, results) => {
                if(error) { rejected(error); return;}
                acepted(results);
              });
        });
    },

    getImageById: (id_imagem) => {
        return new Promise((acepted, rejected) => {

            db.query(`
          SELECT imagem.id, imagem.link, imagem.nome, imagem.tipo, imagem.id_agenda, evento_agenda.nome as evento_nome
            FROM imagem
      INNER JOIN evento_agenda
              ON (evento_agenda.id = imagem.id_agenda)
           WHERE imagem.id = ?`, [id_imagem], (error, results) => {
            if(error) { rejected(error); return;}
            acepted(results);
           });
        });
    },

    addImage: (link, nome, tipo, id_agenda, id_instituicao) => {
        return new Promise((acepted, rejected) => {

            db.query('INSERT INTO imagem (link, nome, tipo, id_agenda, id_instituicao) VALUES (?,?,?,?,?)',
            [link, nome, tipo, id_agenda, id_instituicao], (error, results) => {
                if(error) { rejected(error); return;}
                acepted(results);
            });
        });
    },

    updateImage: (id_imagem, link, nome, tipo, id_agenda, id_instituicao) => {
        return new Promise((acepted, rejected) => {

            db.query('UPDATE imagem SET link = ?, nome = ?, tipo = ?, id_agenda = ?, id_instituicao = ? WHERE id = ?',
            [link, nome, tipo, id_agenda, id_instituicao, id_imagem], (error, results) => {
                if(error) { rejected(error); return;}
                acepted(results);
            });
        });
    },

    delImage: (id_imagem) => {
        return new Promise((acepted, rejected) => {
            db.query('DELETE FROM imagem WHERE id = ?', [id_imagem], (error, results) => {
                if(error) { rejected(error); return;}
                acepted(results);
            });
        });
    }
}