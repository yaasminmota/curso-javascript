const escola = 'Cod3r'

// Vai retornar o elemento que está no índice 4
console.log(escola.charAt(4))
// Unicode
console.log(escola.charCodeAt(2))
// Qual posição o elemento está 
console.log(escola.indexOf('o'))
// Imprime a partir do índice 1
console.log(escola.substring(1))
// Imprime o índice 0 até o 2, não incluindo o 3
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
// Substitui
console.log(escola.replace(3, 'e'))
// /\d/ vai substituir todos os dígitos do texto pela letra e 
console.log(escola.replace(/\d/, 'e'))
// /\w/g Substitui os dígitos e letas do texto pela letra e
console.log(escola.replace(/\w/g, 'e'))
// Converte string em array. Indicou a vírgula como um separador
console.log('Ana, Maria, Pedro'.split(','))