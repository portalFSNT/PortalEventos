/**
 * @class User
 * @property {number} id
 * @property {string} email 
 * @property {string} senha 
 * @property {number} status_usuario 
 * @property {string} nivel_acesso  
 */
class User{
    constructor(id, email, senha, status_usuario, nivel_acesso) {
        this.id = id,
        this.email = email,
        this.senha = senha,
        this.status_usuario = status_usuario,
        this.nivel_acesso = nivel_acesso

    }
}

module.exports = User;