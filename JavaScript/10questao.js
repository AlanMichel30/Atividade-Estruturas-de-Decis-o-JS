var entrada = require('readline-sync');

var numero = parseInt(entrada.question('Digite o número? '));

if(numero % 2 === 0) {
    console.log('O número ' + numero + ' é par')
}else{
    console.log('O número ' + numero + ' é impar')
}