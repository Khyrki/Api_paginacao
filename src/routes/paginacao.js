const express = require('express');
const paginacaoController = require('../controller/paginacaoController');
const paginacaoValidacao = require('../middleware/paginacaoValidacao');

const router = express.Router();

router.get('/', paginacaoValidacao, paginacaoController);

module.exports = router;
