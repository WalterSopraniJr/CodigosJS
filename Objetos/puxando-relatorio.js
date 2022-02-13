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

//percorrer uma array não ordenada
//utilizando o metodo for In

let relatorio="";

for(let info in cliente){
    if(typeof cliente[info]==="object" || typeof cliente[info] === "function")
    {
        continue
    } else {
        relatorio +=`
        ${info} ==> ${cliente[info]}
        `
    }
    
}

console.log(relatorio)