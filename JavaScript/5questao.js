var entrada = require('readline-sync');

var numero = entrada.question('Digite o tamanho o número sua blusa? ');

if((numero) === "M"){
    console.log('Sua escolha foi Tamanho M');
}else if ((numero) === "P"){
    console.log('Sua escolha foi Tamanho P');
}else if ((numero) === "G") {
    console.log('Sua escolha foi tamanho G');
}else{
    console.log('Sua escolha foi não está inválida.')
}