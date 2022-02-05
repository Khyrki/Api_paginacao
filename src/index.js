const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.get('/', (req, res) => {
  return res.json({ message: 'servidor funcionando' })
})

app.listen(3000, () => {
  console.log('O pai ta on!')
})