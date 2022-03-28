const cliente = {
    nome: "Walter",
    idade: 26,
    cpf:"15478548539",
    email: "walter@email.com"
}

console.log(`Meu nome é ${cliente.nome}, tenho ${cliente.idade} anos e voce pode falar comigo pelo email ${cliente.email}.`)

console.log(`Os três primeiros digitos do CPF: ${cliente.cpf.substring(0,3)}`)
