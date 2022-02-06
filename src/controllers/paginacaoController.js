const { v4: uuidv4 } = require('uuid');

const paginacaoController = (req, res, _next) => {
  const { paginaAtual, paginasTotal } = req.body;

  let result = [];

  for (let index = 1; index <= paginasTotal; index += 1) {
    if (index === paginaAtual) {
      result.push(`**${index}**`);
    } else {
      result.push(`${index}`);
    }
  }

  const index = result.indexOf(`**${paginaAtual}**`);

  if (paginaAtual > 5 || paginasTotal > 5) {
    if (!result[index - 2]) {
      const newResult = result.slice(0, 5);
      newResult.push('...');

      result = newResult;
    }

    if (!result[index + 2]) {
      const newResult = result.slice(result[result.length - 6], result[result.length + 1]);
      newResult.unshift('...');

      result = newResult;
    }

    if (result[index + 2] && result[index - 2]) {
      const newResult = result.slice(index - 2, index + 3);

      if (newResult[0] !== '1') {
        newResult.unshift('...');
      }

      if (newResult[newResult.length - 1] !== result[result.length - 1]) {
        newResult.push('...');
      }

      result = newResult;
    }
  }
  return res.status(200).json({ id: uuidv4(), paginacao: result });
};

module.exports = paginacaoController;
