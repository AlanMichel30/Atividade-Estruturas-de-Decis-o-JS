var entrada = require('readline-sync');

var salarioBruto = parseFloat(entrada.question('O salario Bruto: '));

if(salarioBruto <= 1500){
    var fgts = (salarioBruto * 0.08).toFixed(2);
    var inss = (salarioBruto * 0.075).toFixed(2);
    var salarioLiquido = (salarioBruto - inss).toFixed(2);
    console.log('Salário bruto: ' + salarioBruto);
    console.log('FGTS: ' + fgts);
    console.log('INSS: ' + inss);
    console.log('Salário líquido: '+ salarioLiquido);
}else if(salarioBruto >= 1500 && salarioBruto <= 1999 ){
    var fgts = (salarioBruto * 0.08).toFixed(2);
    var inss = (salarioBruto * 0.10).toFixed(2);
    var salarioLiquido = (salarioBruto - inss).toFixed(2);
    console.log('Salário bruto: ' + salarioBruto);
    console.log('FGTS: ' + fgts);
    console.log('INSS: ' + inss);
    console.log('Salário líquido: '+ salarioLiquido);
}else{
    var fgts = (salarioBruto * 0.08).toFixed(2);
    var inss = (salarioBruto * 0.15).toFixed(2);
    var salarioLiquido = (salarioBruto - inss).toFixed(2);
    console.log('Salário bruto: ' + salarioBruto);
    console.log('FGTS: ' + fgts);
    console.log('INSS: ' + inss);
    console.log('Salário líquido: '+ salarioLiquido);
}

