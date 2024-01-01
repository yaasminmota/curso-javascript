 var numero = 1
 {
    var numero = 2
    console.log('dentro = ', numero)
 }

 console.log('fora =', numero)
 // a var sobrescreve a outra menos quando é um bloco assiciado a uma função

 function teste(){
    var local = 123
 }
 teste()
 //console.log(local) erro!