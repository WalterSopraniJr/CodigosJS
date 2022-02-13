function cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
        this.depositar = function(valor){
            this.saldo += valor
        }
}



function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}


const walter = new ClientePoupanca("Walter", "12345678900","walter@email.com", 100, 222)

console.log(walter) 

console.log(walter.hasOwnProperty("saldoPoup"))
console.log(walter instanceof cliente)
console.log(typeof walter)
console.log(Function.prototype.isPrototypeOf(cliente))
console.log(cliente.constructor === Function)