const express = require('express');
const router = express.Router();
const multer = require('multer');
const login = require('./middleware/login');
const roles = require('./middleware/roles');

// Image Storage
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

// -- Usuarios ---

const UserController = require("./controllers/UserController");

// User Routes
router.get('/users',roles.adminRole, UserController.getAll);
router.get('/user/:email', UserController.getById);
router.post('/user', UserController.addUser);
router.patch('/user/:email', UserController.updateUser);
router.delete('/user/:email', UserController.delUser);
router.post('/login', UserController.login);

// --- Lista de Eventos ---

const EventController = require("./controllers/evento/EventoAgendaController");
const ImageController = require("./controllers/evento/ImageController");

// Event Routes
router.get('/events',roles.adminRole, EventController.getAllEvents);
router.get('/event/:id_evento',roles.adminRole, EventController.getEventById);
router.post('/event',roles.adminRole, EventController.addEvent);
router.put('/event/:id_evento',roles.adminRole, EventController.updateEvent);
router.delete('/event/:id_evento',roles.adminRole, EventController.delEvent);

// Image Routes
router.get('/images',roles.adminRole, ImageController.getAllImages);
router.get('/image/:id_imagem',roles.adminRole, ImageController.getImageById);
router.post('/image',roles.adminRole, upload.single('imagem'),ImageController.addImage);
router.patch('/image/:id_imagem',roles.adminRole, upload.single('imagem'), ImageController.updateImage);
router.delete('/image/:id_imagem',roles.adminRole, ImageController.delImage);

// --- Lista de Convidados ---

const ConvidadoController = require("./controllers/convidados/ConvidadoControllers");
const EmpresaController = require("./controllers/convidados/EmpresaControllers");
const EventoPresencaController = require("./controllers/convidados/EventoPresencaControllers");
const EventoConvidadoController = require("./controllers/convidados/EventoConvidadoControllers");

// Convidados Routes
router.get("/convidados",roles.admin_visualizadorRole, ConvidadoController.getAll);
router.get("/convidado/:id",roles.admin_visualizadorRole, ConvidadoController.getById);
router.post("/convidado/",roles.adminRole, ConvidadoController.addConvidado);
router.patch("/convidado/:id",roles.adminRole, ConvidadoController.updateConvidado);
router.delete("/convidado/:id",roles.adminRole, ConvidadoController.delConvidado);

// Empresa Routes
router.get("/empresas",roles.adminRole, EmpresaController.getAll);
router.get("/empresas/:id_empresa",roles.adminRole, EmpresaController.getById);
router.post("/empresas",roles.adminRole, EmpresaController.addEmpresa);
router.patch("/empresas/:id_empresa",roles.adminRole, EmpresaController.updateEmpresa);
router.delete("/empresas/:id_empresa",roles.adminRole, EmpresaController.delEmpresa);

// Evento Routes
router.get("/evento",roles.adminRole, EventoPresencaController.getAll);
router.get("/evento/:id_evento",roles.adminRole, EventoPresencaController.getById);
router.post("/evento",roles.adminRole, EventoPresencaController.addEvento);
router.patch("/evento/:id_evento",roles.adminRole, EventoPresencaController.updateEvento);
router.delete("/evento/:id_evento",roles.adminRole, EventoPresencaController.delEvento);

// Evento_Convidado Routes
router.get("/evento_convidado",roles.admin_visualizadorRole, EventoConvidadoController.getAll);
router.get("/evento_convidado/:id_evento",roles.admin_visualizadorRole, EventoConvidadoController.getById);
router.post("/evento_convidado",roles.adminRole, EventoConvidadoController.addEventoConvidado);
router.patch("/evento_convidado/:id_evento",roles.adminRole, EventoConvidadoController.updateEventoConvidado);
router.delete("/evento_convidado/:id_evento",roles.adminRole, EventoConvidadoController.delEventoConvidado);

// --- Lista de Espaços

const EspacoController = require("./controllers/espaco/EspacoController");
const SolicitacaoController = require("./controllers/espaco/SolicitacaoController");

// Espaço Routes

router.get("/espacos",roles.admin_solicitanteRole, EspacoController.getAllEspacos);
router.get("/espaco/:id_espaco",roles.admin_solicitanteRole, EspacoController.getEspacoById);
router.post("/espaco",roles.adminRole, EspacoController.addEspaco);
router.patch("/espaco/:id_espaco",roles.adminRole, EspacoController.updateEspaco);
router.delete("/espaco/:id_espaco",roles.adminRole, EspacoController.delEspaco);

// Solicitação Routes

router.get("/solicitacao",roles.adminRole, SolicitacaoController.getAllSolicitacoes);
router.get("/solicitacao/:id_solicitacao",roles.admin_solicitanteRole, SolicitacaoController.getSolicitacaoById);
router.post("/solicitacao",roles.admin_solicitanteRole, SolicitacaoController.addSolicitacao);
router.patch("/solicitacao/:id_solicitacao",roles.admin_solicitanteRole, SolicitacaoController.updateSolicitacao);
router.delete("/solicitacao/:id_solicitacao",roles.admin_solicitanteRole, SolicitacaoController.delSolicitacao);

module.exports = router;