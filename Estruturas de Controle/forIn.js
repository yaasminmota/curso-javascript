const notas = [6.5, 7.0, 5.3, 9.2]
// i é os indices
for(i in notas){
    console.log(i, ' = ', notas[i])
}

const pessoa = {
    nome: 'Joao',
    idade: 16,
    peso: 60
}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}