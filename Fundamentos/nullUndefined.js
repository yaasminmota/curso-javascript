let valor // nao inicializada
console.log(valor) // undefined

valor = null //ausencia de valor
console.log(valor)
// console.log(valor.toString())  Erro!
const produto = {}
console.log(produto.preco) // atributo preco nao existe(undefined)
// delete produto.preco
console.log(produto)
produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)