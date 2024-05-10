var entrada = require("readline-sync");

// atividade1


// var nome = entrada.question("Digite seu nome: ");

// console.log(`Seja bem vindo,${nome}`);




// atividade2


// var nome = entrada.question("Digite seu nome: ");

// var sobrenome = entrada.question("Digite seu sobrenome: ");

// console.log(`Seja bem vindo,${nome} ${sobrenome}`);




// atividade 3


// var numero1 = parseFloat(entrada.question("Digite o primeiro numero: "));

// var numero2 = parseFloat(entrada.question("Digite o segundo numero: "));

// var soma = numero1 + numero2;

// console.log(`A soma é:${soma}`);




// atividade 4


// var nota1 = parseFloat(entrada.question("Digite a primeira nota: "));

// var nota2 = parseFloat(entrada.question("Digite a segunda nota: "));

// var nota3 = parseFloat(entrada.question("Digite a terceira nota: "));

// var media = ((nota1 + nota2 + nota3)/3).toFixed(2);

// console.log(`Sua media é:${media}`);




// atividade 5



// var numero1 = parseFloat(entrada.question("Digite o primeiro numero: "));

// var numero2 = parseFloat(entrada.question("Digite o segundo numero: "));

// var numeroDiff = numero1 != numero2;

// console.log(`${numeroDiff}`);




// atividade 6



// var numero1 = parseFloat(entrada.question("Digite o numero: "));

// var restoDaDiv = numero1 % 2

// if(restoDaDiv == 0){
//     console.log(`O numero ${numero1} é par`);
// }

// else{
//     console.log(`O numero ${numero1} não é par`);
// }




// atividade 7



// var a = parseFloat(entrada.question("Digite a primeira idade: "));

// var b = parseFloat(entrada.question("Digite a segunda idade: "));

// var c = parseFloat(entrada.question("Digite a terceira idade: "));

// if(a < (b+c)){
//     console.log(`O numero ${a} é menor que os numeros ${b} e ${c} juntos`);
// }

// else if(a == (b+c)){
//     console.log(`O numero ${a} é igual a soma de ${b} e ${c} `);
// }

// else{
//     console.log(`O numero ${a} é maior que os numeros ${b} e ${c} juntos`);
// }



// atividade 8



// var lado = parseFloat(entrada.question("Digite o valor do lado: "));

// var area = lado * lado;

// console.log(`A área do quadrado é: ${area}`);



// atividade 9



// var larguraT = parseFloat(entrada.question("Digite o valor da largura do terreno: "));

// var comprimentoT = parseFloat(entrada.question("Digite o valor do comprimento do terreno: "));

// var larguraC = parseFloat(entrada.question("Digite o valor da largura da casa: "));

// var comprimentoC = parseFloat(entrada.question("Digite o valor do comprimento da casa: "));

// var areaT = larguraT * comprimentoT;

// var areaC = larguraC * comprimentoC;

// if (areaT > areaC){
//     console.log(`A área que sobrou do terreno foi ${areaT-areaC}`);
// }

// else{
//     console.log(`a casa é maior que o terreno.`)
// }



// atividade 10


// var raio = parseFloat(entrada.question("Digite o valor do raio: "));

// var areaCirculo = 3.14 * (raio**2);

// console.log(`A área do circulo é: ${areaCirculo}`);



// atividade 11



// var larguraP = 10;

// var comprimentoP = 15;

// var areaPiso = larguraP * comprimentoP;

// var areaPorCaixa = 2.20;

// var quantidadeCaixas = Math.ceil(areaPiso / areaPorCaixa);    //math ceil arredonda pra cima

// console.log(`caixas necessárias: ${quantidadeCaixas}`);




// atividade 12



// var numero = parseFloat(entrada.question("Digite o valor do numero: "));

// var numero75 = numero * 0.75

// console.log(`resultado do calculo: ${numero75}`);



// atividade 13


// var ano = parseFloat(entrada.question("digite o ano do seu nascimento: "));

// var conta = 2024 - ano; 

// console.log(`sua idade é: ${conta}`);



// atividade 14

// var salarioBruto = 2300;

// var inss = salarioBruto * 0.12;

// var fgts = salarioBruto * 0.08;

// var salarioLiquido = salarioBruto - inss;

// console.log(`a. O salário bruto é: ${salarioBruto}`);
// console.log(`b. O recolhimento do FGTS será: ${fgts}`);
// console.log(`c. O recolhimento de INSS será: ${inss}`);
// console.log(`d. O salário líquido este mês será: ${salarioLiquido}`);


// atividade 15


// var pi = 3;

// var raio = Math.ceil(40 / (2 * pi));

// var ladoQuadrado = 2 * pi * raio;

// var areaQuadrado = ladoQuadrado * ladoQuadrado;

// console.log(`A área do quadrado é:  ${areaQuadrado}`);
