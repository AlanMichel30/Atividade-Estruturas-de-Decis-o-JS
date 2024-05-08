var entrada = require('readline-sync');

var numero = entrada.question('Digite o valor número? ');

if(numero > 0){
    console.log('O valor e positivo ' + numero);
}else if (numero < 0){
    console.log('O valor e negativo ' + numero);
}else{
    console.log('O valor e zero');
}