const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        // acessando o atributo de um obj usando this
        console.log(this.saudacao)
    }
}

pessoa.falar()
//armazenando a funcao valor em uma var
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa( )