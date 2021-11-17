const express = require("express");
const app = express();


app.get("/", function(req, res){
    res.send("Ola mundo!"); // diretorio
})

app.get("/sobre", function(req, res){
    res.send("Minha pagina sobre"); // rota sobre
})

app.get("/blog", function(req,res){
    res.send('Bem vindo ao meu blog!'); // roda blog
})

app.listen(8081, function(){
    //função de callback
    console.log("Servidor rodando em http://localhost:8081")
}); // essa função sempre deve ser a última do código