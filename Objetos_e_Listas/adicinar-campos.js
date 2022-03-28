const cliente = {
    nome: "Walter",
    idade: 26,
    cpf:"15478548539",
    email: "walter@email.com"
}

console.log(cliente)

//adiciona o campo fone e o valor dele
cliente.fone = "6584525986"

console.log(cliente)

//se tentar adicionar um novo campo com o mesmo nome, ele somente será atualizado
cliente.fone = "5555555555"
console.log(cliente)

//tambem é possivel deletar propriedades com o comando delete
delete cliente.cpf

console.log(cliente)