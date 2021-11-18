const express = require('express');
const app = express();

// depois de : é considerado parâmetro
// req = recebe dados de uma requisição

app.get("/ola/:nome/:cargo/:cor", function(req,res){
    res.send("<h1>Ola " + req.params.nome + "</h1>"+"<h2>Seu cargo e: "+req.params.cargo+"</h1>"+"<h2>Sua cor favorita e: "+req.params.cor+"</h2");
});


app.listen(8081, function(){console.log("Servidor esta rodando!")});