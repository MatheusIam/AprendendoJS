const express = require('express');
const app = express();

// Sequelize é um módulo que conecta NodeJS ao MySQL
// Comando pra abrir o MySQL root: mysql -h localhost -u root -p

app.get("/", function(req, res){

})

app.listen(8081, function(){console.log("Servidor esta rodando!")});