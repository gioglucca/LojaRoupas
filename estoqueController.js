const estoqueModel = require('../models/estoqueModel');

class EstoqueController{

    async listar(req, res){  
        
        const resultado = await estoqueModel.find({});
        res.json(resultado);    
    }

    async buscarPorCodigo(req, res){
        const codigo  = req.params.codigo;
       
        const resultado = await estoqueModel.findOne({'codigo': codigo});
        res.json(resultado);
    }

    async salvar(req, res){
        const estoque = req.body;

  
        const objeto = await estoqueModel.findOne({}).sort({'codigo': -1});
        estoque.codigo = objeto == null ? 1 : objeto.codigo + 1;

       
        const resultado = await estoqueModel.create(estoque);
        res.json(resultado);        
    }

    async atualizar(req, res){
        const codigo = req.params.codigo;
        const estoque = req.body;
        
        await estoqueModel.findOneAndUpdate({'codigo': codigo}, estoque);
        res.send("Estoque atualizado!");
    }

    async excluir(req, res){
        const codigo = req.params.codigo;
        await estoqueModel.findOneAndDelete({'codigo': codigo});
        res.send("Lançamento no estoque excluído!");
    }
}

module.exports = new EstoqueController();