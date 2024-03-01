//usando expressao relacional
function soNotaBoa (nota){
    if(nota >= 7){
        console.log('Aprovado com nota ' + nota)
    }
}
soNotaBoa(6)
soNotaBoa(7)

// passando diretamente o valor, ele pode ser true ou false
function seForVerdade(valor){
    // so retorna se for true
    if(valor){
        console.log('É verdade...')
    }
}
seForVerdade(0)
seForVerdade(1)