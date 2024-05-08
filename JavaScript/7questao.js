var entrada = require('readline-sync');

var turno = entrada.question('Digite o turno? ');
turno = turno.toLowerCase();

if(turno === "m" || turno === "matutino"){
    console.log('Bom Dia!');
}else if (turno === "v" || turno === "vespertino"){
    console.log('Boa Tarde!');
}else if (turno === "n" || turno === "noturno"){
    console.log('Boa Noite!');
}else{
    console.log('Valor inválida!.')
}