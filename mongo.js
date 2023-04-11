const mongoose = require('mongoose');

const url = 'mongodb://localhost/meubanco';

//const url = 'mongodb+srv://admin:senha@meubanco.opfdf.mongodb.net/?retryWrites=true&w=majority';

const db = mongoose.connect(url);

mongoose.connection.on('connected', ()=> console.log("Conectado ao mongodb!"));
mongoose.connection.on('error', (err) => console.log("Erro" + err));

module.exports = db;