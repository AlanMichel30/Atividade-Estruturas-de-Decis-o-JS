var entrada = require('readline-sync');

var numero = entrada.question('Digite o primeiro número? ');

if(numero >= 20 && numero <= 90){
    console.log('Você digitou '+ numero);
    console.log('O número está compreendido entre 20 e 90.');
}
else{
    console.log('Você digitou '+ numero);
    console.log('O número não está compreendido entre 20 e 90.');
}
