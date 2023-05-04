const express = require('express');
const router = express.Router();
const multer = require('multer');
const login = require('./middleware/login');

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
router.get('/users', UserController.getAll);
router.get('/user/:email', UserController.getById);
router.post('/user', UserController.addUser);
router.patch('/user/:email', UserController.updateUser);
router.delete('/user/:email', UserController.delUser);
router.post('/login', UserController.login);

// --- Lista de Eventos ---

const EventController = require("./controllers/evento/EventoAgendaController");
const ImageController = require("./controllers/evento/ImageController");

// Event Routes
router.get('/events', EventController.getAllEvents);
router.get('/event/:id_evento', EventController.getEventById);
router.post('/event', EventController.addEvent);
router.put('/event/:id_evento', EventController.updateEvent);
router.delete('/event/:id_evento', EventController.delEvent);

// Image Routes
router.get('/images', ImageController.getAllImages);
router.get('/image/:id_imagem', ImageController.getImageById);
router.post('/image', upload.single('imagem'), ImageController.addImage);
router.patch('/image/:id_imagem', upload.single('imagem'), ImageController.updateImage);
router.delete('/image/:id_imagem', ImageController.delImage);

// --- Lista de Convidados ---

const ConvidadoController = require("./controllers/convidados/ConvidadoControllers");
const EmpresaController = require("./controllers/convidados/EmpresaControllers");
const EventoController = require("./controllers/convidados/EventoPresencaControllers");
const EventoConvidadoController = require("./controllers/convidados/EventoConvidadoControllers");

// Convidados Routes
router.get("/convidados", ConvidadoController.getAll);
router.get("/convidados/:nome", ConvidadoController.getById);
router.post("/convidados/", ConvidadoController.addConvidado);
router.patch("/convidados/:nomes", ConvidadoController.updateConvidado);
router.delete("/convidados/:nome", ConvidadoController.delConvidado);

// Empresa RoutesgetEspaco
router.get("/empresas", EmpresaController.getAll);
router.get("/empresas/:id_empresa", EmpresaController.getById);
router.post("/empresas", EmpresaController.addEmpresa);
router.patch("/empresas/:empresa", EmpresaController.updateEmpresa);
router.delete("/empresas/:empresa", EmpresaController.delEmpresa);

// Evento Routes
router.get("/evento", EventoController.getAll);
router.get("/evento/:id_evento", EventoController.getById);
router.post("/evento", EventoController.addEvento);
router.patch("/evento/:id_evento", EventoController.updateEvento);
router.delete("/evento/:id_evento", EventoController.delEvento);

// Evento_Convidado Routes
router.get("/evento_convidado", EventoConvidadoController.getAll);
router.get("/evento_convidado/:id_evento", EventoConvidadoController.getById);
router.post("/evento_convidado/:id_evento", EventoConvidadoController.addEventoConvidado);
router.patch("/evento_convidado/:id_evento", EventoConvidadoController.updateEventoConvidado);
router.delete("/evento_convidado/:id_evento", EventoConvidadoController.delEventoConvidado);

// --- Lista de Espaços

const EspacoController = require("./controllers/espaco/EspacoController");
const SolicitacaoController = require("./controllers/espaco/SolicitacaoController");

// Espaço Routes

router.get("/espacos", EspacoController.getAllEspacos);
router.get("/espaco/:id_espaco", EspacoController.getEspacoById);
router.post("/espaco", EspacoController.addEspaco);
router.patch("/espaco/:id_espaco", EspacoController.updateEspaco);
router.delete("/espaco/:id_espaco", EspacoController.delEspaco);

// Solicitação Routes

router.get("/solicitacao", SolicitacaoController.getAllSolicitacoes);
router.get("/solicitacao/:id_solicitacao", SolicitacaoController.getSolicitacaoById);
router.post("/solicitacao", SolicitacaoController.addSolicitacao);
router.patch("/solicitacao/:id_solicitacao", SolicitacaoController.updateSolicitacao);
router.delete("/solicitacao/:id_solicitacao", SolicitacaoController.delSolicitacao);

module.exports = router;