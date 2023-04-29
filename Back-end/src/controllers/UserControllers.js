const UserService = require("../services/UserService");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

module.exports = {
    login: async(req, res) => {
        try {
            let email = req.body.email;
            let senha = req.body.senha;
            
            var results = await UserService.login(email);
 
            console.log(results);
            if(1 == results[0].status_usuario){
                if(await bcrypt.compare(senha, results[0].senha)){
                    const token = jwt.sign({
                        nome: results[0].nome,
                        email: results[0].email,
                        nivelAcesso: results[0].nivel_acesso
                    },
                    process.env.JWT_KEY,
                    {
                        expiresIn: "6d"
                    }); 
                    return res.status(200).send({
                        message: 'Autenticado com sucesso',
                        token: token,
                    });
                    console.log(token);      
                }
            }
            return res.status(401).send({ message: 'Falha na autenticação'});
                

        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: 'Falha na autenticação' });
        }
    
    },

}