//altera strings com map()

let nomes = ["ana Julia", "Caio vinicius", "BIA silva"]

//método que chama uma função ou cria uma utilizando => para utilizar o método que coloca todas as letras como maiusculas
const nomesAtualizados = nomes.map(nome => nome.toUpperCase())

console.log(nomesAtualizados)