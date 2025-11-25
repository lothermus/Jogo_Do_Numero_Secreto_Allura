alert('Boas vindas ao jogo do número secreto!');
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(`Esse é seu número secreto:${numeroSecreto}`);
let chute;
let tentativas = 1

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // Se o chute for igual ao número secreto
    if(chute == numeroSecreto) {
        break;
    } else {
        if(chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
        } else{
        alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++
    }
}

let qtdtentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí, você descobriu o número secreto que era ${numeroSecreto} com ${tentativas} ${qtdtentativas}!`);


//---------------------------

// Desafio 1: Criar um prompt que pergunta o usuário
// qual o dia a semana e retorna "Bom final de semana!"
// se for algum dos dois dias do final de semana. Senão, retorna "Boa semana!

let chuteDiadaSemana = prompt('Qual o dia da semana?')
console.log('Dia da semana digitado' + ' ' +chuteDiadaSemana)
let mensagemfds = ('Bom final de semana!')
if (chuteDiadaSemana == 'Sábado') {
    alert(mensagemfds);
}else if (chuteDiadaSemana == 'Domingo') {
    alert(mensagemfds);
//Aqui é caso o usuário esqueça da pontuação
}else if (chuteDiadaSemana == 'Sabado') {
    alert(mensagemfds);
}else {
    alert('Boa semana!');
}

//---------------------------

//Desafio 2: Criar um prompt que pergunta o usuário qual o número
//e irá responder se o número é positivo ou negativo.

let numerodigitado = prompt('Digite um número:')
console.log('O número digitado pelo usuário é o' + ' ' + numerodigitado)
if (numerodigitado >= 0) {
    alert('O numero digitado é positivo!');
} else {
    alert('O número digitado é negativo!');
}

//---------------------------

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!".
//Caso contrário, mostre "Tente novamente para ganhar.".

alert('Bem vindo ao jogo da pontuação!')
let pontuacao = prompt('Adivinhe sua pontuação:')
console.log('A pontuação digitada é a:'+ ' ' + pontuacao)
if (pontuacao >= 100) {
    alert('Parabéns, você ganhou!')
} else{
    alert('Você perdeu, tente novamente!')
}

//---------------------------

//Desafio 4: Crie uma mensagem que informa o usuário sobre o saldo da conta
// usando uma template string para incluir o valor do saldo

let saldoatual = 5000;
let usuario = prompt('Qual o seu nome?');
alert(`Seja bem vindo, ${usuario}!`);
alert(`Seu saldo atual é de: R$${saldoatual}`);
alert(`Tenha um bom dia, ${usuario}!`);

//---------------------------

//Desafio 5: Peça ao usuário para inserir seu nome usando prompt. 
//Em seguida, mostre um alerta de boas-vindas usando esse nome.
let bemvindo = prompt('Qual seu nome?')
alert(`Seja bem vindo, ${bemvindo}!`)

//---------------------------
//Desafio Parte 1.2:
//---------------------------
// Desafio 1: Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 0
while (contador <= 10) {
    console.log(contador)
    contador++
}
//---------------------------
//Desafio 2: Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador = 10
while (contador >= 0) {
    console.log(contador)
    contador--
}
//---------------------------
/*Desafio 3: Crie um programa de contagem regressiva. Peça um número e conte deste número até 0,
usando um loop while no console do navegador*/
let numero = prompt('Digite um número para a contagem regressiva até 0:');

while (numero >= 0) {
    console.log(numero);
    numero--
}
//---------------------------
/* Desafio 4: Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, 
usando um loop while no console do navegador. */
let numerodigitado = prompt('Digite um número para contarmos a partir de 0:');
let contageminicial = 0
while(contageminicial <= numerodigitado) {
    console.log(contageminicial)
    contageminicial++
}

//---------------------------
//Desafio Parte 3
//---------------------------

//1) Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Boas vindas!');

//2) Crie uma variável chamada "nome" e atribua a ela o seu nome.
let nome = prompt('Digite aqui seu nome');

//2.1) Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
console.log(`Olá, ${nome}!`); 

//3) Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
alert(`Olá, ${nome}!`);

//4) Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?
let pgtProgramacao = prompt('Qual a linguagem de programação que você mais gosta?');

//4.1) Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
console.log(`A linguagem de programação favorita é ${pgtProgramacao}`);

//5) Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha.
let valor1 = 5000
let valor2 = 10000

//5.1) Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado"
let somanum = parseInt(valor1) + parseInt(valor2)

//5.2) Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
console.log(`O Valor 1 é ${valor1} e o Valor 2 é ${valor2} e a soma desses valores é: ${somanum}.`);

//6) Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha.
let valorngt1 = 2000
let valorngt2 = 3000

//6.1) Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado".

let resultadosub = parseInt(valorngt1) - parseInt(valorngt2)

// 6.2) Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

console.log(`A diferença entre ${valorngt1} e ${valorngt2} é igual a ${resultadosub}`)

/*7) Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar 
se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console. */

let idade = prompt('Digite aqui sua idade, diremos se você é ou não mair de idade:');
if (idade >= 18) {
    alert(`Sua idade é ${idade} anos. Você é maior de idade!`);
    console.log(`Sua idade é ${idade} anos. Você é maior de idade!`);
} else {
    alert(`Você tem ${idade} anos. Você é menor de idade!`);
    console.log(`Sua idade é ${idade} anos. Você é maior de idade!`);
}

/* 8) Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. 
Use if-else para imprimir a respectiva mensagem. */

let numerousr = prompt('Agora, digite um número e irei te dizer se ele é negativo ou positivo:')
if(numerousr >= 0) {
    alert(`O número digitado foi o ${numerousr}, ele é um número positivo!`);
} else{
    alert(`O número digitado foi o ${numerousr}, ele é um número negativo!`)
}

//9. Use um loop while para imprimir os números de 1 a 10 no console.

console.log('Contagem regressiva de 0 a 10:')
let cntregressiva = 0

while (cntregressiva <= 10) {
    console.log(cntregressiva)
    cntregressiva++
}

// 10. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota 
é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let vlrnota = prompt('Digite aqui o valor da sua nota:')
if(vlrnota >= 7) {
    alert('Você foi aprovado!');
} else {
    alert('Você foi reprovado!');
}

//11. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
console.log('Número aleatório gerado pelo Mathrandom:');
console.log(Math.random())

//12. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
console.log('Número aleatório inteiro entre 1 e 10:');
console.log(parseInt(Math.random() * 10)) + 1; */

//13. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
console.log('Número aleatório inteiro entre 1 e 1000:');
console.log(parseInt(Math.random() * 1000 + 1))











