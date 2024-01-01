// duas formas de criar um numero
const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
// se o valor é inteiro.
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const ap1 = 9.871
const ap2 = 6.871

const total = ap1 * peso1 + ap2 * peso2
const media = total / (peso1 + peso2)
// qtd de casas decimais
console.log(media.toFixed(2)) 
console.log((10.345).toFixed(2))
// numero em string
console.log(media.toString())
//em binario
console.log(media.toString(2))
console.log(typeof media)