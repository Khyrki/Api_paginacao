const express = require('express');
const paginacaoValidacao = require('../middleware/paginacaoValidacao');
const paginacaoController = require('../controllers/paginacaoController');

const router = express.Router();

router.get('/', paginacaoValidacao, paginacaoController);

module.exports = router;
