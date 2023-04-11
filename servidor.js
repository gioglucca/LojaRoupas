require("./db/mongo");
const express = require("express");
const srv = express();
srv.use(express.json());

//Roteamento das rotas de conteúdo
const estoqueRouter = require('./routes/estoqueRouter');
srv.use('/estoque', estoqueRouter);

srv.listen(3000, function(){
    console.log('Servidor rodando em http://localhost:3000');
});