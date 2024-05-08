var entrada = require('readline-sync');

var nome = parseFloat(entrada.question('Digite o seu nome? '));
var altura = parseFloat(entrada.question('Digite qual seu altura? '));
var peso = parseFloat(entrada.question('Digite qual seu peso? '));

imc = peso/(altura * altura);

if(imc <= 18.5){
    console.log('Caso paciente, ' + nome + '. Seu IMC é ' + imc + ' e você se encontrar no nível Abaixo do peso');
}else if(imc >= 18.5 && imc <= 24.9){
    console.log('Caso paciente, ' + nome + '. Seu IMC é ' + imc + ' e você se encontrar no nível Peso ideal(parabéns)');
}else if(imc >= 25.0 && imc <= 29.9){
    console.log('Caso paciente, ' + nome + '. Seu IMC é ' + imc + ' e você se encontrar no nível Levemente acima do peso');
}else if(imc >= 30.0 && imc <= 34.9){
    console.log('Caso paciente, ' + nome + '. Seu IMC é ' + imc + ' e você se encontrar no nível Obesidade grau |');
}else if(imc >= 35.0 && imc <= 39.9){
    console.log('Caso paciente, ' + nome + '. Seu IMC é ' + imc + ' e você se encontrar no nível Obesidade grau || (severa)');
}else{
    console.log('Caso paciente, ' + nome + '. Seu IMC é ' + imc + ' e você se encontrar no nível Obesidade ||| (mórbida)');
}






