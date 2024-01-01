
const funcs = []
for ( var i = 0; i < 10; i++){
    // adicionar um novo elemento no array
    funcs.push(function(){
        console.log(i)
    })
}
// como var nao tem escopo de bloco retorna 10 que é o valor que o i ficou depois do bloco
funcs[2]()
funcs[8]()

//usar let  p nao dar o erro