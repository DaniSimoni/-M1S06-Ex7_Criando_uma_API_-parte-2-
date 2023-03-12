const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000');
  });

app.post('/addUser', (req, res) => {
    res.json({"nome": "Thomas"})
    console.log(`Novo Usuário Adicionado`)
})
