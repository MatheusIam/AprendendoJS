const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', 'M@281104m', {
    host: 'localhost',
    dialect: 'mysql' // o sequelize trabalha com vários bancos de dados
});

sequelize.authenticate().then(function(){
    // caso não tenha erro
    console.log("Conectado com Sucesso!");
}).catch(function(erro){
    // caso haja um erro
    console.log("Falha ao se conectar: "+erro);
});

// then e catch fazem parte do paradigma programação assíncrona