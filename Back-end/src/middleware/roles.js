var jwt = require('jsonwebtoken');

exports.adminRole = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, process.env.JWT_KEY);
        const role = decode.nivelAcesso; 

        console.log(decode);

        if(role == process.env.admin){
            next();
        }else{
            return res.status(401).send("Acesso não autorizado.");
        }  
    }catch{
        return res.status(401).send({ mensagem: 'Falha na autenticação ' });
    }   
},

exports.solicitanteRole = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, process.env.JWT_KEY);
        const role = decode.nivelAcesso; 

        console.log(decode);

        if(role == process.env.solicitante){
            next();
        }else{
            return res.status(401).send("Acesso não autorizado.");
        }  
    }catch{
        return res.status(401).send({ mensagem: 'Falha na autenticação ' });
    }
        
},

exports.visualizadorRole = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, process.env.JWT_KEY);
        const role = decode.nivelAcesso; 

        console.log(decode);

        if(role == process.env.visualizador){
            next();
        }else{
            return res.status(401).send("Acesso não autorizado.");
        }  
    }catch{
        return res.status(401).send({ mensagem: 'Falha na autenticação ' });
    }
        
},

exports.admin_visualizadorRole = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, process.env.JWT_KEY);
        const role = decode.nivelAcesso; 

        console.log(decode);

        if(role == process.env.admin || role == process.env.visualizador){
            next();
        }else{
            return res.status(401).send("Acesso não autorizado.");
        }  
    }catch{
        return res.status(401).send({ mensagem: 'Falha na autenticação ' });
    }     
},
exports.admin_solicitanteRole = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, process.env.JWT_KEY);
        const role = decode.nivelAcesso; 
        req.user = decode.sub;

        console.log(decode);


        if(role == process.env.admin || role == process.env.solicitante){
            next();
        }else{
            return res.status(401).send("Acesso não autorizado.");
        }  
    }catch{
        return res.status(401).send({ mensagem: 'Falha na autenticação ' });
    }      
}