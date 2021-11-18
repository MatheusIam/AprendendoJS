const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("Servidor esta rodando!");
});

app.get("/:nome", function(req,res){
    res.send("Ola "+req.params.nome+"!");
})

app.listen(8081, function(){console.log("Servidor Rodando!")});