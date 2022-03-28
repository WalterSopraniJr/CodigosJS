const alunos = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

const mediaDosAlunos = [10,7,9,6]

let listaDeNotasEAlunos = [alunos, mediaDosAlunos]

//funcionamento: o primeiro colchetes especifica a lista, no caso dos nomes, e o segundo parâmetro é a posição no indice
//é chamada pela segunda vez para a nota
console.log(`${listaDeNotasEAlunos[0][0]}, sua media é ${listaDeNotasEAlunos[1][0]}`)