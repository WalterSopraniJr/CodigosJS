//utilizando operador de espalhamento
const clientes = [{
    nome: "Walter",
    idade: 26,
    cpf:"15478548539",
    email: "walter@email.com",
    fone: ["548569548","984562589"],
    dependentes: [
      {
       nome: "Sara",
       parentesco: "filha",
       dataNasc:"02/05/2020"},
      {
       nome:"Jorge Soprani",
       parentesco:"filho",
       dataNasc:"09/01/2010"
      }
    ]
},{
nome: "Bia",
idade: 24,
cpf:"65345245898",
email: "bia@email.com",
fone: ["548569548","984562589"],
dependentes: [
  {
   nome: "Sara",
   parentesco: "filha",
   dataNasc:"02/05/2020"
},
  {
   nome:"Jorge Soprani",
   parentesco:"filho",
   dataNasc:"09/01/2010"
  }
]
}
]

//... é o operador de espalhamento
//na operaç~çao abaixo ele filtra pelos dependentes e espalha sua informação dentro da array
const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

//.table lista em forma de tabela, cada chave vira uma coluna, e cada indice uma linha
console.table(listaDependentes)