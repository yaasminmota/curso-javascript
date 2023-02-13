let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)
// Todos os números inteiros, com exceção do 0, são verdadeiros
isAtivo = 1
console.log(!isAtivo)
// !! está negando duas vezes, ou seja, retorna true
console.log(!!isAtivo)

// Retorna verdadeiro...
console.log(!!' ')
console.log(!!'texto')
console.log(!![]) // vetores
console.log(!!{}) // objeto
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// Retorna falso
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

// Vi retornar apenas o elemento verdadeiro
console.log((''|| null || 0 || 123))

let nome = ''
console.log(nome || 'Desconhecido')