const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
//adicionando um novo elemento no array
valores[4] = 10
valores.push({id: 3}, false, null, 'teste')
console.log(valores)
// quantos elementos possui no array
console.log(valores.length)
// imprime o ultimo valor do array
console.log(valores.pop())
delete valores[0]
console.log(valores)
