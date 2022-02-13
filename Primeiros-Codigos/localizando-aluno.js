const alunos = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

const mediaDosAlunos = [10,7,9,6]

let listaDeNotasEAlunos = [alunos, mediaDosAlunos]


//utilizado includes: que faz uma busca na array, de acordo com o indice 0, ele vai vuscar pelo nome Ana. 
//Caso esse nome exista, ele grava o indice do  nome na variavel indice. 
//O includes sempre retorna verdadeiro ou falso (booleano).
//indexOf retorna o numero do indice, no caso 1, por ser a posiçao do nome da Ana.

const exibeNomeNotas = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        //                        [0][1]                                              [1][1]
        return listaDeNotasEAlunos[0][indice] + ' ,sua media é ' + listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno não esta cadastrado"
    }
}

console.log(exibeNomeNotas("Ana"))