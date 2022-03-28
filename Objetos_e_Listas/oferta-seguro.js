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




function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj)
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

oferecerSeguro(cliente)

//Object.keys trás as chaves da variavel cliente
//Object.values trás as informações das chaves da variável cliente
//Object.entries trás as informações como uma array de chave e informaçao
//o trecho de codigo abaixo exemplifica

//console.log(Object.keys(cliente))
//console.log(Object.values(cliente))
//console.log(Object.entries(cliente))