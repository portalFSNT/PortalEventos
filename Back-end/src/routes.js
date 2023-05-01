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
router.patch("/convidados/:nomes", ConvidadoController.updateConvidado);
router.delete("/convidados/:nome", ConvidadoController.delConvidado);

//EMPRESA -----
const EmpresaController = require("./controllers/EmpresaControllers");
router.get("/empresas", EmpresaController.getAll);
router.get("/empresas/:id_empresa", EmpresaController.getById);
router.post("/empresas", EmpresaController.addEmpresa);
router.patch("/empresas/:empresa", EmpresaController.updateEmpresa);
router.delete("/empresas/:empresa", EmpresaController.delEmpresa);

//EVENTO -----
const EventoController = require("./controllers/EventoControllers");
router.get("/evento", EventoController.getAll);
router.get("/evento/:id_evento", EventoController.getById);
router.post("/evento", EventoController.addEvento);
router.patch("/evento/:id_evento", EventoController.updateEvento);
router.delete("/evento/:id_evento", EventoController.delEvento);

//EVENTO_CONVIDADO -----
const EventoConvidadoController = require("./controllers/EventoConvidadoControllers");
router.get("/evento_convidado", EventoConvidadoController.getAll);
router.get("/evento_convidado/:id_evento", EventoConvidadoController.getById);
router.post("/evento_convidado/:id_evento", EventoConvidadoController.addEventoConvidado);
router.patch("/evento_convidado/:id_evento", EventoConvidadoController.updateEventoConvidado);
router.delete("/evento_convidado/:id_evento", EventoConvidadoController.delEventoConvidado);
module.exports = router;