let a = prompt("Qual será o valor da variavel a?");
let b = prompt("Qual será o valor da variavel b?");

let velhaA = a;

//Trocando os valores
a = b;
b = velhaA

//Apos a troca:
console.log("O novo Valor de a é", a);
console.log("O novo Valor de b é", b);
