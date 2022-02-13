function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function clientePoupanca(nome,cpf,email,saldo,saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const SJota = new clientePoupanca("SJota", "12345678911", "sjtoa@email.com",100,200)

console.log(SJota)

clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

SJota.depositarPoup(50)

console.log(SJota.saldoPoup)