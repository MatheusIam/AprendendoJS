// Criando servidor http
var http = require('http');

http.createServer(function(req, res){
    //função de callback
    res.end("Ola mundo, bem vindo ao meu site e servidor!"); // Mensagem para quem está acessando
}).listen(8081);

console.log("O servidor estah rodando");