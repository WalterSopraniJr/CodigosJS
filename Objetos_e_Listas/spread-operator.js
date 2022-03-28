const personagem = {
    nome: "SJota",
    classe: "clérigo"
}

const equipamento = {
    mao: "martelo gigante",
    vestimenta: "gibão"
}

const ficha = {...personagem, ...equipamento}
console.log(ficha)