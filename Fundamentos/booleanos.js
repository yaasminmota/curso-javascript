let isAtivo = 1
// inverte a logica
console.log(!false)
console.log(!!false)
// verdadeiros
// todos os num inteiros sao true, com exceçao do 0
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
//atribuir um valor true
console.log(!!(isAtivo = 2))
// falsos
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
//vai retonrnar true se algum deles for true
console.log(!!('' || null || 0 || ' '))
let nome = ''
console.log(nome || 'Desconhecido')