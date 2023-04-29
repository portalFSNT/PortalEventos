const express = require('express');
const router = express.Router();
//const multer = require('multer');
const login = require('./middleware/login');

const UserController = require("./controllers/UserControllers")
router.post('/login', UserController.login);
router.get('/login', UserController.login); 
module.exports = router;