const express = require('express');
const app = express();
const port = 3001;

app.get('/hello-world', (req, res) => {
  console.log('GET /hello-world chamado');
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
