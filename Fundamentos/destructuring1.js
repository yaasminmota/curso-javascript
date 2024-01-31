const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        rua: 'rua abc',
        numero:'123'
    }
}
// tirar dois atributos dentro de uma estrutura
const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(i, n)

const {endereco: {rua, numero}} = pessoa
console.log(rua, numero)

