const express = require('express');
const bodyParser = require('body-parser').json();
const routerPaginacao = require('./routes/paginacao');
const paginacaoValidation = require('./middleware/paginacaoValidation');

const app = express();

app.use(bodyParser);

app.use('/paginacao', paginacaoValidation, routerPaginacao);

app.use((err, req, res, _next) => {
  if (err.isJoi) res.status(400).json({ message: err.details[0].message });
  const internalError = 500;
  res.status(err.code ? err.code : internalError).json({ message: err.message });
});

app.listen(3000, () => {
  console.log('O pai ta on!');
});
