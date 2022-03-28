const cliente = {
    nome: "Walter",
    idade: 26,
    cpf:"15478548539",
    email: "walter@email.com",
    fone: ["548569548","984562589"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc:"02/05/2020"
}

console.log(cliente)

cliente.dependentes.nome="Sara Soprani"

console.log(cliente)