//concatenando arrays (ajuntando arrays) com o comando concat

const salaDePython = ['Melissa ', 'Helena ', 'Rodrigo']

const salaDeJS = ['Ju ','Leo ','Raquel']

const salasUnificadas = salaDePython.concat(salaDeJS)

console.log(salasUnificadas)

//ele não mexe nos valores originais, por isso foi necessário criar outra variavel para armazenar
