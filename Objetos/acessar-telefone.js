const cliente = {
    nome: "Walter",
    idade: 26,
    cpf:"15478548539",
    email: "walter@email.com",
    fone: ["548569548","984562589"]
}

cliente.fone.forEach(fone => console.log(fone))

//por não saber ao certo quantos telefones um cliente pode ter, 
//é mais viável utilizar o forEach para que ele pegue todas as informações dentro de uma array, 
//ao invés de criar uma variável por informação.