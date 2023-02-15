var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

let num  = 1
{
    let num = 2
    console.log('dentro = ', num)
}
console.log('fora = ', num)

// Var tem escorpo global e de função
// Let tem escorpo global, de função e de bloco