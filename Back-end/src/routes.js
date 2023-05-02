const express = require('express');
const router = express.Router();
const multer = require('multer');

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

const UserController = require("./controllers/UserController");
const EventController = require("./controllers/EventController");
const ImageController = require("./controllers/ImageController");

// User Routes
router.get('/users', UserController.getAll);
router.get('/user/:email', UserController.getById);
router.post('/user', UserController.addUser);
router.patch('/user/:email', UserController.updateUser);
router.delete('/user/:email', UserController.delUser);

// Event Routes
router.get('/events', EventController.getAllEvents);
router.get('/event/:id_evento', EventController.getEventById);
router.post('/event', EventController.addEvent);
router.put('/event/:id_evento', EventController.updateEvent);
router.delete('/event/:id_evento', EventController.delEvent);

//Image Routes
router.get('/images', ImageController.getAllImages);
router.get('/image/:id_imagem', ImageController.getImageById);
router.post('/image', upload.single('imagem'), ImageController.addImage);
router.patch('/image/:id_imagem', upload.single('imagem'), ImageController.updateImage);
router.delete('/image/:id_imagem', ImageController.delImage);

module.exports = router;