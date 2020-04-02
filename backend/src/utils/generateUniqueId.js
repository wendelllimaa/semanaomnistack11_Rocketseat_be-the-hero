//Teste para criação de ONGS

//Isolado -> Para caso precise do "id" em outro lugar. Alterando aqui, altera em todos.

const crypto = require ('crypto');

module.exports = function generateUniqueId () {
    return crypto.randomBytes(4).toString('HEX');    
}