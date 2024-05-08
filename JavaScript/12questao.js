var entrada = require('readline-sync');

var tl = parseFloat(entrada.question('Digite o um trabalho de laboratório? '));
var as = parseFloat(entrada.question('Digite o uma avaliação semestral? '));
var ef = parseFloat(entrada.question('Digite o um exame final? '));

media = (tl + as + ef) / 3;

if(media >= 7){
    console.log('Aprovado!');
}else if(media >= 4 && media <= 6){
    console.log('Recuperação!');
}else{
    console.log('Reprovado!');
}