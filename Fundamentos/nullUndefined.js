let valor // nao atribui valor à variável
console.log(valor) // undefined

valor = null //ausencia de valor
console.log(valor)

// console.log(valor.toString())  -> não tentar acessar uma var que esteja nulo (erro)

const produto = {}
console.log(produto.preco) // o obj produto está definido mas o atributo preco nao(undefined)
// console.log(produto.preco.a) na dá pra acessar algo que está indefinido (preco) e dáerro assim como a linha 7
/*
deletar um atributo de um obj
delete produto.preco
*/


console.log(produto)
produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)