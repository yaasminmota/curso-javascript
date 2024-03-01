// funcao
let dobro = function (a) {
    return 2 * a
}
console.log(dobro(2))

// funcao arrow
 dobro = (a) => {
    return 2 * a
 }
 console.log(dobro(3))

 //return implicito
 dobro = a => 2 * a
 console.log(dobro(4))

 let ola = function() {
    return 'Olá'
 }

 ola = () => 'Olá'
 ola = _ => 'Olá' // possui um parametro
 