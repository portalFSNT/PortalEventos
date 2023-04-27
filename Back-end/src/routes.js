const express = require('express');
const router = express.Router();

const UserController = require("./controllers/UserController");

router.get('/users', UserController.getAll);
//router.post('/user', UserController.addUser);

module.exports = router;