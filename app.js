
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const pessoasRoutes = require('./routes/pessoasRoutes');

const app = express();

const logsPath = path.join(__dirname, 'logs/access.log');
const accessLogStream = fs.createWriteStream(logsPath, { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

app.use(express.json());

app.use('/pessoas', pessoasRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;