const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Bem-vindo ao site da Marvel e DC!</h1> <br> Fico feliz que esteja aqui');
});

app.get('/marvel', (req, res) => {
  res.send('Este é o universo de heróis da <strong>Marvel</strong>.');
});

app.get('/dc', (req, res) => {
  res.send('Este é o universo de heróis da <strong>DC</strong>.');
});

app.listen(PORT, () => {
  console.log(`Servidor disponível em http://localhost:${PORT}`);
});