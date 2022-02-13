//testando a função reduce de tres formas

//const utilizada nas tres formas
const numeros = [43, 50, 65, 12]


//Primeira forma

//funcionamento - dentro do parenteses é definido os nomes ACUMulador e ATUAL (A e B). Função callback
//=> define uma função. Se chama Arrow function.
//o acumulador acumula cada resultado somado. 
//o atual faz um looping com cada valor dentro da array, um por vez, por isso se chama atual.
//o 0 define o valor inicial da soma
//não é necessário usar return por ser uma função callback.
//Caso você tenha mais de uma linha de instrução dentro de uma arrow function, as chaves {} e a palavra-chave return voltam a ser necessários.
const somaArrowFunction = numeros.reduce((acum, atual) => acum + atual, 0)

console.log(somaArrowFunction)


//Segunda forma
const somaFunction = numeros.reduce(function (acum, atual) {
    return atual + acum
   }, 0)

console.log(somaFunction)


//Terceira forma
function operacaoNumerica(acum, atual) {
    return atual + acum
   }
   
   const somaReturn = numeros.reduce(operacaoNumerica, 0)

console.log(somaReturn)