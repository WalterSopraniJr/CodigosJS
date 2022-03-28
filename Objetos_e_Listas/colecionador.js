 const colecionador = {
     nome: "Walter dos Boardgames",
     idade:26,
     tipoDeColecao: ["boardgame"],
    contato:"walter@email.com",
    adicionarTipo:function(propriedade,tipo){
        this[propriedade].push(tipo)
      }
      
 }

 for(i = 0; i < 4; i++) {
    colecionador.adicionarTipo("tipoDeColecao","HQ"+i)
  }

 console.log(colecionador.nome)
 console.log(colecionador["tipoDeColecao"])