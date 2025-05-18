const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Esteja sempre investindo em você, de forma pessoal e profissional.');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
