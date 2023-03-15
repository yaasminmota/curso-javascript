const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
/* const concatenacao = 'O
lá ' + nome + '!'
não pode quebrar a linha no meio da string
*/
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)
//expressoes
console.log(`1 + 1 = ${1 + 1}`)
// funcao
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)