const Joi = require('joi');

const validacoesAdicionais = ({ paginaAtual, paginasTotal }, next) => {
  if (paginaAtual > paginasTotal) {
    const err = {
      code: 400,
      message: '"paginaAtual" cant be greater then "paginasTotal"',
    };
    next(err);
  }
};

const paginacaoValidacao = (req, res, next) => {
  const { error } = Joi.object({
    paginaAtual: Joi.number().integer().min(1).required(),
    paginasTotal: Joi.number().integer().min(1).required(),
  }).validate(req.body);

  validacoesAdicionais(req.body, next);

  if (error) next(error);

  return next();
};

module.exports = paginacaoValidacao;
