/** CONFIGURANDO O NODEMON 
 * Sempre que necessitar que o back-end seja executado:
 * npm install nodemon;
 * Alterar no "package.json" -> "start": "nodemon abcd.js";
 * Executar npm start.
 */

const express = require ('express');
const cors = require ('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express ();

app.use(cors());
app.use(express.json()); /** Antes de todas as requisições */

app.use(routes);
/* Rotas e Recursos */

/* MÉTODOS HTTP:

-> GET: Buscar/Listar uma informação no back-end;
-> POST: Criar uma informação no back-end;
-> PUT: Alterar uma informação no back-end;
-> DELETE: Deletar uma informação no back-end. 

*/

/*
TIPOS DE PARÂMETROS:

-> QUERY Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação,...)
-> ROUTE Params: Parâmetros utilizados para identificar recursos (/:id);
-> REQUEST BODY: Corpo da requisição utilizado para criar ou alterar recursos;
*/

/** BANCO DE DADOS
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server;
 * NoSQL: MongoDB, CouchDB, etc.
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */


/** request -> guardar todos os dados que vem da requisição do usuário
 *  response -> retornar uma resposta do usuário;
 */

app.use(errors());

module.exports = app;