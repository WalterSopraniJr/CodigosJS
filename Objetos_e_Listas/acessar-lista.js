const cliente = {
    nome: "Walter",
    idade: 26,
    cpf:"15478548539",
    email: "walter@email.com"
}

//                0        1       2      3
const chaves = ["nome", "idade", "cpf", "email"]

//console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))

console.log("Adicionando dependentes");

cliente.dependentes= {
    nome: "Liz Oliveira",
    parentesco: "Filha",
    idade: 1
}

console.log(cliente)