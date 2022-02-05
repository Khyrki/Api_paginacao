const express = require('express');
const bodyParser = require('body-parser');
const routerPaginacao = require('./routes/paginacao');

const app = express();

app.use(bodyParser.json());

app.use('/paginacao', routerPaginacao);

app.listen(3000, () => {
  console.log('O pai ta on!');
});
