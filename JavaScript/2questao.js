const entrada = require('readline-sync');

const num1 = entrada.question('Digite o primeiro número? ');
const num2 = entrada.question('Digite o segundo número? ');


if(num1 > num2){
    return num1;
}
else {
    return num2;
}

const maior = (num1,num2);
console.log('Maior que '+ maior);
