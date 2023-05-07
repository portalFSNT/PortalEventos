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

//, UserController.getAll

//USER -----   
const UserController = require("./controllers/UserControllers");
router.get('/users',roles.adminRole, UserController.getAll);
router.get('/user/:email', UserController.getById);
router.post('/user',roles.adminRole, UserController.addUser);
router.patch('/user/:email', UserController.updateUser);
router.delete('/user/:email', UserController.delUser);
router.post('/login', UserController.login);

//CONVIDADO -----
const ConvidadoController = require("./controllers/convidado/ConvidadoControllers");
router.get("/convidados",roles.adminRole, ConvidadoController.getAll);
router.get("/convidados/:nome",roles.adminRole, ConvidadoController.getById);
router.post("/convidados/",roles.adminRole, ConvidadoController.addConvidado);
router.patch("/convidados/:nomes",roles.adminRole, ConvidadoController.updateConvidado);
router.delete("/convidados/:nome",roles.adminRole, ConvidadoController.delConvidado);

//EMPRESA -----
const EmpresaController = require("./controllers/convidado/EmpresaControllers");
router.get("/empresas",roles.adminRole, EmpresaController.getAll);
router.get("/empresas/:id_empresa",roles.adminRole, EmpresaController.getById);
router.post("/empresas",roles.adminRole, EmpresaController.addEmpresa);
router.patch("/empresas/:empresa",roles.adminRole, EmpresaController.updateEmpresa);
router.delete("/empresas/:empresa",roles.adminRole, EmpresaController.delEmpresa);

//EVENTO_PRESENCA -----
const EventoPresencaController = require("./controllers/convidado/EventoPresencaControllers");
router.get("/evento",roles.adminRole, EventoPresencaController.getAll);
router.get("/evento/:id_evento",roles.adminRole, EventoPresencaController.getById);
router.post("/evento",roles.adminRole, EventoPresencaController.addEvento);
router.patch("/evento/:id_evento",roles.adminRole, EventoPresencaController.updateEvento);
router.delete("/evento/:id_evento",roles.adminRole, EventoPresencaController.delEvento);

//EVENTO_CONVIDADO -----
const EventoConvidadoController = require("./controllers/convidado/EventoConvidadoControllers");
router.get("/evento_convidado",roles.admin_visualizadorRole, EventoConvidadoController.getAll);
router.get("/evento_convidado/:id_evento",roles.adminRole, EventoConvidadoController.getById);
router.post("/evento_convidado/:id_evento",roles.adminRole, EventoConvidadoController.addEventoConvidado);
router.patch("/evento_convidado/:id_evento",roles.adminRole, EventoConvidadoController.updateEventoConvidado);
router.delete("/evento_convidado/:id_evento",roles.adminRole, EventoConvidadoController.delEventoConvidado);


//EVENTO_AGENDA -----
const EventoAgendaController = require("./controllers/evento/EventoAgendaController");
router.get('/events',roles.adminRole, EventoAgendaController.getAllEvents);
router.get('/event/:id_evento',roles.adminRole, EventoAgendaController.getEventById);
router.post('/event',roles.adminRole, EventoAgendaController.addEvent);
router.put('/event/:id_evento',roles.adminRole, EventoAgendaController.updateEvent);
router.delete('/event/:id_evento',roles.adminRole, EventoAgendaController.delEvent);

//IMAGE -----
const ImageController = require("./controllers/evento/ImageController");
router.get('/images',roles.adminRole, ImageController.getAllImages);
router.get('/image/:id_imagem',roles.adminRole, ImageController.getImageById);
router.post('/image',roles.adminRole, upload.single('imagem'), ImageController.addImage);
router.patch('/image/:id_imagem',roles.adminRole, upload.single('imagem'), ImageController.updateImage);
router.delete('/image/:id_imagem',roles.adminRole, ImageController.delImage);

module.exports = router;