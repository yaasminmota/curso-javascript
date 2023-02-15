const nome = 'Ana'

/*
Não se pode quebrar uma string no meio
const concatenacao = 'Ol
á' + nome + '!'
*/

const concatenacao = 'Olá ' + nome +'!'
const template = `
    Olá 
    ${nome}!
`
console.log(concatenacao, template)
// Expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)