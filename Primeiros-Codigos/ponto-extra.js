//utilizando o metodo map()
//o map retorna com uma nova array.

const notas = [10, 9,8,7,6]

//                operador ternário                            |adiciona o valor, e ai sim retorna
const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota)
    
console.log(notasAtualizadas)

