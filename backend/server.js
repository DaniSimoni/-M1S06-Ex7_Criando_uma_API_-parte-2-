/* Agora continuando o exercício anterior no módulo de controlador siga as seguintes regras de negócio de cada rota:

Envio de um novo usuário:

O objeto a ser enviado no corpo da requisição para controlador deve seguir o seguinte formato :
{
  "nome":"Fulano",
  "idade":18,
  "cargo":"junior"
  "senha":"12345678"
}
O método HTTP será o post com a rota da sua escolha;
Caso o usuário tenha idade menor que 21 anos não deverá prosseguir com a requisição, então retorne o objeto {“mensagem”: “Usuário não possui idade suficiente”};
Caso na requisição não seja enviado nada no seu corpo retorne com status 406 com o objeto {“mensagem”: “Está faltando dados para concluir a operação”};
Caso a operação seja um sucesso, retorne com status 200 o objeto {“mensagem”: “Criado com sucesso”};


Deletar o usuário:

Deverá ser passado na URL da requisição um id;
Verifique na url se o id é passado, caso contrário retorne com status 406 com o objeto {“mensagem”: “Está faltando dados para concluir a operação”};
Caso a operação seja um sucesso, retorne com status 200 o objeto {“mensagem”: “Deletado com sucesso”};
OBS: lembre de alterar os dados para que passe em todos os testes e sua API esteja 100%. */

const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, function () {
  console.log('Servidor rodando na porta 3000')
});


app.post('/verification/:id', [(req, res, next) => {

const user = req.body.nome;

    if (user === undefined) {
    res.status(406).send({ "mensagem": "Está faltando dados para concluir a operação" });
    console.log({ "mensagem": "Está faltando dados para concluir a operação" });
    }
    ;next();
    } 

],
[
  (req, res) => {
    
  const idade = req.body.idade;
  console.log(idade);

  if (idade >= 21) {
    res.status(200).send({ "mensagem": "Criado com Sucesso!" });

    
  } else {
    
    res.status(400).send({"mensagem": "Usuário não possui idade suficiente"});
    console.log(`{“mensagem”: “Usuário não possui idade suficiente”}`)
  }
}]);


app.delete('/verification/del/:id', (req, res) => {
      const idCode = req.params.id

      if (idCode === null) {
        res.status(406).send({"mensagem": "Está faltando dados para concluir a operação"});
      }
      else {
        console.log(idCode);
        res.status(200).send({"mensagem": "Deletado com sucesso"});
      }


});



















/* const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, function () {
  console.log('Servidor rodando na porta 3000')
});


app.post('/verification', (req, res, next) => {

const user = req.body.nome;

    if (user !== undefined) {
  
    console.log(user);
    res.status(200).send({ "mensagem": "Criado com Sucesso!" });

    } 
    else { 
    res.status(406).send({ "mensagem": "Está faltando dados para concluir a operação" });
    console.log({ "mensagem": "Está faltando dados para concluir a operação" });
    };
        next();
  }
);


app.post('/idade', (req, res) => {
    
    const idade = req.body.idade;
    console.log(idade);

    if (idade >= 21) {
      res.status(200).send({ "mensagem": "Idade OK!" });

      
    } else {
      
      res.status(400).send({"mensagem": "Usuário não possui idade suficiente"});
      console.log(`{“mensagem”: “Usuário não possui idade suficiente”}`)
    }
  }
); */