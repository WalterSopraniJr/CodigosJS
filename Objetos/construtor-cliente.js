class Pessoa {
    constructor(nome, sobrenome, email){
        this.nome = nome
        this.sobrenome = sobrenome
        this.email = email
    }

//funcao de dentro do Java Script
    exibirNomeCompleto(){
        console.log(`${this.nome} ${this.sobrenome}`)
    }
}

//herança de classe com a palavra reservada extends
class Programador extends pessoa{
    constructor(nome, sobrenome, email, linguagem){
        super(nome, sobrenome, email) //super é uma palavra reservada que funciona como call em herança
        this.linguagem = linguagem
    }
}

const novoDev = new programador("Walter", "Soprani", "walter@email.com", "Java Script")

console.log(novoDev)