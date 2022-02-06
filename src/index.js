const express = require('express');
const bodyParser = require('body-parser').json();
const routerPaginacao = require('./routes/paginacao');

const app = express();

const PORT = 8000;

app.use(bodyParser);

app.use('/paginacao', routerPaginacao);

app.use((err, _req, res, _next) => {
  if (err.isJoi) res.status(400).json({ message: err.details[0].message });
  const internalError = 500;
  res.status(err.code ? err.code : internalError).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`App rodando na porta ${PORT}`);
});
