const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EstoqueSchema = new Schema({
    codigo: Number,
    descricao: String,
    quantidade: Number
});


module.exports = mongoose.model('estoque', ConteudoSchema);
