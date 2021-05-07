'use strict';

// Importando micro-framework
const express = require('express');

// Porta
const PORT = 8080;
const HOST = '0.0.0.0';

// Enviando mensagem para a rota raiz
const app = express();
app.get('/', (req, res) => {
  res.send('Eu sou Full Cycle.');
});

// Listando a porta que está rodando
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
