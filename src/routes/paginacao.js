const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.json({ message: 'Rota paginacao funcionando' }));

module.exports = router;
