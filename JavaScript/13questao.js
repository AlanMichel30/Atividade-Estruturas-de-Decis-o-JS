var entrada = require('readline-sync');

var salario = parseFloat(entrada.question('O salario inicial: '));

if(salario >= 208.00){
    var salarioAntes = salario + (salario * 0.2);
    console.log('O Salário antes do reajuste: ' + salario.toFixed(2));
    console.log('O percentual de aumento aplicado: 20%');
    console.log('O Valor do aumento: ' + (salario * 0.2).toFixed(2));
    console.log('o novo salário, após o aumento ' + salarioAntes.toFixed(2));

}else if (salario >= 281.00 && salario <= 700.00){
    console.log('o novo salário, após o aumento ' + salarioAntes.toFixed(2));
}else if (salario >= 701.00 && salario <= 1500.00){
    console.log('o novo salário, após o aumento ' + salarioAntes.toFixed(2));
}else{
    console.log('o novo salário, após o aumento ' + salarioAntes.toFixed(2));
}


