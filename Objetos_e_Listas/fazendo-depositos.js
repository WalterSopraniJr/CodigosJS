const cliente = {
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
    ],
    saldo: 100,
    depositar:function(valor)
    {
        this.saldo+=valor
    }
}

console.log(cliente.saldo)

//o campo depositar virou uma função, e pode-se determinar o que entra no parenteses e como é processado
cliente.depositar(30)
console.log(cliente.saldo)