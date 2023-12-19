
const express = require('express');
const pessoasControllers= require('../controllers/pessoasControllers');

const router = express.Router();

router.post('/', pessoasControllers.adicionarPessoa);
router.delete('/:cpf', pessoasControllers.removerPessoa);

module.exports = router;