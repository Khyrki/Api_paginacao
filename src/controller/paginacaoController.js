const { v4: uuidv4 } = require('uuid');
const paginacaoService = require('../service/paginacaoService');

const paginacaoController = (req, res, _next) => {
  const { paginaAtual, paginasTotal } = req.body;

  const result = paginacaoService(paginaAtual, paginasTotal);

  return res.status(200).json({ id: uuidv4(), paginacao: result });
};

module.exports = paginacaoController;
