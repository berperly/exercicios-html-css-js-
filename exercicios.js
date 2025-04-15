// 24
alert("Olá mundo!");

// 25 

console.log("Meu primeiro script em JavaScript!");

// 26 

let i = 5; 
let t = 4; 
console.log("A soma de I + T é:", i + t);

// 27

let nome = prompt("Qual é o seu nome?");
alert("Olá "+ nome + ", seja bem-vindo");

// 28

let num = "12,32";
let nu2 = parseInt(num);

console.log("A string é: ", num);
console.log("O numero inteiro é: ",nu2);

// 29 

let bool = true;
console.log("O consoni é boiola? ", bool);



// 30

let i = 20; 
let o = "bernardo";
let c = true;

console.log(typeof i);
console.log(typeof o);
console.log(typeof c);

// 31 


let n1 = prompt("Escolha o numero 1 ");
let n2 = prompt("Escolha o numero 2 ");

let num = Number(n1) + Number(n2);
alert("A soma é: "+ num)

// 32

let num = 5; 
let escolha = prompt("Você deseja alterar o valor? (0 = não) (1 ou maior = sim)");
if(escolha == 0){
console.log("O resultado é:",num);
} else {
    let som = prompt("Quanto você gostaria de adicionar ao numero principal?");
    let resultado = num + Number(som);
    console.log("O resultado já adicionando é:", resultado);
}


// 33

let numero = Number(prompt("Digite um número:"));

if (numero % 2 === 0) {
  console.log("O número é PAR.");
} else {
  console.log("O número é ÍMPAR.");
}


// 34 



// 35 

let num = 5; 
let escolha = prompt("Você deseja alterar o valor? (0 = não) (1 ou maior = sim)");
if(escolha == 0){
console.log("O resultado é:",num);
} else {
    let som = prompt("Quanto você gostaria de adicionar ao numero principal?");
    let resultado = num + Number(som);
    console.log("O resultado já adicionando é:", resultado);
}

// 36

let n1 = prompt("Escolha o valor 1: ");
let n2 = prompt("Escolha o valor 2: ");
let n3 = prompt("Escolha o valor 3: "); 
let media = Number(n1) + Number(n2) + Number(n3);
let med2 = media / 3;

alert("A média dos três valores é: " + med2);


// 37

let n1 = prompt("Escolha um numero: ");
let n2 = Number(n1) * 2;
alert("O dobro do seu numero é: " + n2);

// 38

let temp = prompt("Digite a temperatura em graus Celsius: ");
let fahr = (temp * 1.8) + Number(32);

alert("A temperatura em graus Fahrenheit é: " + fahr);


// 39 

let idd = prompt("Digite a sua idade: ");
if (idd >= 18){
    alert("O usuário é maior de idade.");
}else{
    alert("O usuário é menor de idade.");
}


// 40

let n1 = Number(prompt("Qual é o numero 1? ")); 
let n2 = Number(prompt("Qual é o numero 2? "));
let n3 = Number(prompt("Qual é o numero 3? "));
let maior;
if(n1 >= n2 && n1 >= n3){
    maior = n1;
}
else if(n2 >= n1 && n2 >=n3){
    maior = n2; 
}

else{ 
    maior = n3;
}

alert("O maior numero é: " +maior);

// 41

for(let i = 1; i <= 10; i++){
    console.log(i);
}

// 42

let i = 10;

do {
    console.log(i);
    i--;
} while (i >= 1);


// 43

let num;
do{
 num = Number(prompt("Digite um numero maior que 10! "));
} 
while(num <= 9);
alert("Você digitou o numero: "+num);

// 44 

let numero = 7;

for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + (numero * i));
}


// 45 

