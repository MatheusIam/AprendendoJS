// função expecífica do NodeJS que carrega um módulo

var somaFunc = require("./funcs/soma.js");
var subFunc = require("./funcs/subtracao.js");
var multiFunc = require("./funcs/multiplicacao.js");
var divFunc = require("./funcs/divisao");

console.log(somaFunc(1,2));
console.log(subFunc(100,1));
console.log(multiFunc(2,2));
console.log(divFunc(10,5));