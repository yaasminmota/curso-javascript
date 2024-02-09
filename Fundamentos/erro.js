function tratarErroELancar(erro){
   // throw new Error ('...')
   //throw 10
  // throw 'mensagem'
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date
  }
}


function imprimirNome (obj){
// codigo que pode gerar erro 
try{
    console.log(obj.name.toUpperCase() + '!!!')
    //tratar erro
    catch (e){
        tratarErroELancar(e)
    } 
    //mesmo dando erro ou nao
    finally {
        console.log('final')
    }
}
}
//const nome = {name : 'Pedro'}
const obj = {nome : 'Pedro'}
imprimirNome(nome)