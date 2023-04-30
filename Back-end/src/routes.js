const express = require('express');
const router = express.Router();
//const multer = require('multer');
const login = require('./middleware/login');

//USER -----   
const UserController = require("./controllers/UserControllers");
router.post('/login', UserController.login);
router.get('/login', UserController.login); 

//CONVIDADO -----
const ConvidadoController = require("./controllers/ConvidadoControllers");
router.get("/convidados", ConvidadoController.getAll);
router.get("/convidados/:nome", ConvidadoController.getById);
router.post("/convidados/", ConvidadoController.addConvidado);
router.put("/convidados/:nomes", ConvidadoController.updateConvidado);
router.delete("/convidados/:nome", ConvidadoController.delConvidado);

//EMPRESA -----
const EmpresaController = require("./controllers/EmpresaControllers");
router.get("/empresas", EmpresaController.getAll);
router.get("/empresas/:id_empresa", EmpresaController.getById);
router.post("/empresas", EmpresaController.addEmpresa);

module.exports = router;