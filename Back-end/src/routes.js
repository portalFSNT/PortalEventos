const express = require('express');
const router = express.Router();
const multer = require('multer');
const roles = require('./middleware/roles')
const login = require('./middleware/login');

//IMAGE_STORAGE -----
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './upload');
    },
    filename: function(req, file, cb) {
        let data = new Date().toISOString().replace(/:/g, '-') + '-';
        cb(null, data + file.originalname)
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
});

//USER -----   
const UserController = require("./controllers/UserController");
router.get('/users',roles.adminRole, UserController.getAll);
router.get('/user/:email', UserController.getById);
router.post('/user', UserController.addUser);
router.patch('/user/:email', UserController.updateUser);
router.delete('/user/:email', UserController.delUser);
router.post('/login', UserController.login);

//CONVIDADO -----
const ConvidadoController = require("./controllers/convidados/ConvidadoControllers");
router.get("/convidados",roles.admin_visualizadorRole, ConvidadoController.getAll);
router.get("/convidado/:id",roles.admin_visualizadorRole, ConvidadoController.getById);
router.post("/convidado/",roles.adminRole, ConvidadoController.addConvidado);
router.patch("/convidado/:id",roles.adminRole, ConvidadoController.updateConvidado);
router.delete("/convidado/:id",roles.adminRole, ConvidadoController.delConvidado);

//EMPRESA -----
const EmpresaController = require("./controllers/convidados/EmpresaControllers");
router.get("/empresas",roles.adminRole, EmpresaController.getAll);
router.get("/empresas/:id_empresa",roles.adminRole, EmpresaController.getById);
router.post("/empresas",roles.adminRole, EmpresaController.addEmpresa);
router.patch("/empresas/:id_empresa",roles.adminRole, EmpresaController.updateEmpresa);
router.delete("/empresas/:id_empresa",roles.adminRole, EmpresaController.delEmpresa);

//EVENTO_PRESENCA -----
const EventoPresencaController = require("./controllers/convidados/EventoPresencaControllers");
router.get("/evento",roles.adminRole, EventoPresencaController.getAll);
router.get("/evento/:id_evento",roles.adminRole, EventoPresencaController.getById);
router.post("/evento",roles.adminRole, EventoPresencaController.addEvento);
router.patch("/evento/:id_evento",roles.adminRole, EventoPresencaController.updateEvento);
router.delete("/evento/:id_evento",roles.adminRole, EventoPresencaController.delEvento);

//EVENTO_CONVIDADO -----
const EventoConvidadoController = require("./controllers/convidados/EventoConvidadoControllers");
router.get("/evento_convidado",roles.admin_visualizadorRole, EventoConvidadoController.getAll);
router.get("/evento_convidado/:id_evento",roles.admin_visualizadorRole, EventoConvidadoController.getById);
router.post("/evento_convidado",roles.adminRole, EventoConvidadoController.addEventoConvidado);
router.patch("/evento_convidado/:id_evento",roles.adminRole, EventoConvidadoController.updateEventoConvidado);
router.delete("/evento_convidado/:id_evento",roles.adminRole, EventoConvidadoController.delEventoConvidado);

//EVENTO_AGENDA -----
const EventoAgendaController = require("./controllers/evento/EventoAgendaController");
router.get('/events',roles.adminRole, EventoAgendaController.getAllEvents);
router.get('/event/:id_evento',roles.adminRole, EventoAgendaController.getEventById);
router.post('/event',roles.adminRole, EventoAgendaController.addEvent);
router.patch('/event/:id_evento',roles.adminRole, EventoAgendaController.updateEvent);
router.delete('/event/:id_evento',roles.adminRole, EventoAgendaController.delEvent);

//IMAGE -----
const ImageController = require("./controllers/evento/ImageController");
router.get('/images',roles.adminRole, ImageController.getAllImages);
router.get('/image/:id_imagem',roles.adminRole, ImageController.getImageById);
router.post('/image',roles.adminRole, upload.single('imagem'), ImageController.addImage);
router.patch('/image/:id_imagem',roles.adminRole, upload.single('imagem'), ImageController.updateImage);
router.delete('/image/:id_imagem',roles.adminRole, ImageController.delImage);

//ESPAÇO ----- 
const EspacoController = require("./controllers/espaco/EspacoController");
router.get("/espacos",roles.admin_solicitanteRole, EspacoController.getAllEspacos);
router.get("/espaco/:id_espaco",roles.admin_solicitanteRole, EspacoController.getEspacoById);
router.post("/espaco",roles.adminRole, EspacoController.addEspaco);
router.patch("/espaco/:id_espaco",roles.adminRole, EspacoController.updateEspaco);
router.delete("/espaco/:id_espaco",roles.adminRole, EspacoController.delEspaco);

// SOLICITAÇÃO -----
const SolicitacaoController = require("./controllers/espaco/SolicitacaoController");
router.get("/solicitacao",roles.adminRole, SolicitacaoController.getAllSolicitacoes);
router.get("/solicitacao/:id_solicitacao",roles.admin_solicitanteRole, SolicitacaoController.getSolicitacaoById);
router.post("/solicitacao",roles.admin_solicitanteRole, SolicitacaoController.addSolicitacao);
router.patch("/solicitacao/:id_solicitacao",roles.admin_solicitanteRole, SolicitacaoController.updateSolicitacao);
router.delete("/solicitacao/:id_solicitacao",roles.admin_solicitanteRole, SolicitacaoController.delSolicitacao);

// TIPO -----
const TipoController = require("./controllers/evento/TipoController");
router.get("/tipos",roles.adminRole, TipoController.getAll);
router.get("/tipo/:id",roles.adminRole, TipoController.getById);
router.post("/tipo",roles.adminRole, TipoController.addTipo);
router.patch("/tipo/:id",roles.adminRole, TipoController.updateTipo);
router.delete("/tipo/:id",roles.adminRole, TipoController.delTipo);

// INSTITUICAO -----
const InstituicaoController = require("./controllers/evento/InstituicaoController");
router.get("/instituicoes",roles.adminRole, InstituicaoController.getAll);
router.post("/instituicao",roles.adminRole, InstituicaoController.addInstituicao);

module.exports = router;