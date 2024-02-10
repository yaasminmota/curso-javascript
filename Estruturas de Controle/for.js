let contador = 1
while(contador <= 10){
   // console.log('contador = ' + contador)
    console.log(`contador = ${contador}`)
    contador++
}
for(let i = 0; i <= 10; i++){
    console.log(`i = ${i}`)
}

const notas = [6.1, 4.3, 8.2, 9.1, 3.2]
for(let i = 0; i < notas.length ; i++){
    console.log('Notas = ' + notas[i])
}
//declarando com let nao tem acesso a var i fora do bloco
console.log(i)