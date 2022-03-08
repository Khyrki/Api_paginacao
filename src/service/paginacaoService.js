const paginacaoService = (paginaAtual, paginasTotal) => {
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
    if (!result[index - 3]) {
      const newResult = result.slice(0, 5);
      newResult.push('...');

      result = newResult;
    }

    if (!result[index + 3]) {
      const newResult = result.slice(result.length - 5, result.length + 1);
      newResult.unshift('...');

      result = newResult;
    }

    if (result[index + 3] && result[index - 3]) {
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

  return result;
};

module.exports = paginacaoService;
