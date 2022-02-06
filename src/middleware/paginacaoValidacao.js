const Joi = require('joi');

const validacoesAdicionais = ({ paginaAtual, paginasTotal }, next) => {
  if (paginaAtual > paginasTotal) {
    const err = {
      code: 400,
      message: '"paginaAtual" cant be greater then "paginasTotal"',
    };
    next(err);
  }

  if (typeof (paginaAtual) !== 'number' || typeof (paginasTotal) !== 'number') {
    const err = {
      code: 400,
      message: '"paginaAtual" and "paginasTotal" must be numbers',
    };
    next(err);
  }
};

const paginacaoValidacao = (req, res, next) => {
  const { error } = Joi.object({
    paginaAtual: Joi.number().integer().min(1).required(),
    paginasTotal: Joi.number().integer().min(1).required(),
  }).validate(req.body);

  if (error) next(error);

  validacoesAdicionais(req.body, next);

  return next();
};

module.exports = paginacaoValidacao;
