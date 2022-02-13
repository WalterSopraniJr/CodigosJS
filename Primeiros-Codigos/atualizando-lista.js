//atualizando listas com splice()
//splice permite remover e acrescentar informações dentro das arrays
//parâmetro: var.splice(qual indice começa, remove quantos elementos, adiciona elementos no lugar)

//indice:                  0      1       2       3      4           5
const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

//esse splice vai remover no indice 2, uma pessoa da lista e acresentar o Rodrigo
listaDeChamada.splice(2,1,'Rodrigo')

console.log(`Lista de chamada: ${listaDeChamada}`)