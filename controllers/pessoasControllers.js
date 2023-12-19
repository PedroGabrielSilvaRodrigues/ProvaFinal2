const fs = require('fs');
const path = require('path');

const pessoasPath = path.join(__dirname, '../../data/pessoas.json');

const adicionarPessoa = (req, res) => {
  const { nome, email, cpf } = req.body;

  if (!nome || !email || !cpf) {
    return res.status(400).json({ message: 'Nome, e-mail e CPF são obrigatórios' });
  }

  const novaPessoa = { nome, email, cpf };


  fs.appendFileSync(pessoasPath, JSON.stringify(novaPessoa) + '\n');

  res.json({ message: 'Pessoa adicionada com sucesso', pessoa: novaPessoa });
};

const removerPessoa = (req, res) => {
  const cpf = req.params.cpf;

  const pessoas = fs.readFileSync(pessoasPath, 'utf8').split('\n').filter(Boolean);

  const pessoasAtualizadas = pessoas.filter((pessoa) => {
    const pessoaObj = JSON.parse(pessoa);
    return pessoaObj.cpf !== cpf;
  });

  fs.writeFileSync(pessoasPath, pessoasAtualizadas.join('\n'));

  res.json({ message: 'Pessoa removida com sucesso', cpf });
};

module.exports = {
  adicionarPessoa,
  removerPessoa,
};