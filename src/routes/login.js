const express = require('express');
const LoginControllers = require('../controllers/LoginControllers');

const router = express.Router();

router.get('/login', LoginControllers.login);
router.post('/login', LoginControllers.auth);
router.get('/register', LoginControllers.register);
router.post('/register', LoginControllers.storeUser);
router.get('/logout', LoginControllers.logout);

module.exports = router;