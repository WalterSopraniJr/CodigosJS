const cliente = {
    nome: "Walter",
    idade: 26,
    cpf:"15478548539",
    email: "walter@email.com",
    fone: ["548569548","984562589"],
    dependentes: [{
      nome: "Sara",
      parentesco: "filha",
      dataNasc:"02/05/2020"
    }]
}

cliente.dependentes.push({
   nome:"Jorge Soprani",
   parentesco:"filho",
   dataNasc:"09/01/2010"
})

//criado uma variavel que irá filtrar o dependente a partir de uma data de nascimento
const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="02/05/2020")

console.log(filhaMaisNova[0].nome)
console.log(filhaMaisNova)