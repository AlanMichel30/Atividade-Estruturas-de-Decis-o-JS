var entrada = require('readline-sync');

var n1 = parseFloat(entrada.question('Digite o primeira nota: '));
var n2 = parseFloat(entrada.question('Digite o segunda nota: '));
var n3 = parseFloat(entrada.question('Digite o terceira nota: '));

var media = (n1 +n2 +n3) / 3 ;


switch(true){
    case media >= 7:
        console.log('Você passou!');
        break;
    default:
        console.log('Você não passou!');
}