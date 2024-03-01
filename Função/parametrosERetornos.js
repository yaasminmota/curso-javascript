function area(largura, altura){
    area = largura * altura
    if(area > 20){
        console.log(`Area maior que o permitido = ${area} m2`)
    }else {
        return area
    }
}
// retorna undefined pois a chamada da funcao esta dentro de um console.log
console.log(area(5,5))
//area(5, 5)