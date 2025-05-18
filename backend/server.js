const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/hello', (req, res) => {
  res.send('Esteja sempre investindo em você, de forma pessoal e profissional.');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
