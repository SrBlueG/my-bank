const express = require('express');
const router = express.Router();
const { registerCuenta } = require('../controllers/cuentasController');

router.post('/register', registerCuenta);

module.exports = router;
