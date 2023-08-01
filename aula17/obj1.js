var pessoas = {
    nome: 'Nathan',
    idade: 17,
    sexo: 'M',
    peso: 70.5,
    engordar(p = 0){
        console.log('Engordou')
        this.peso += p
    }
}
pessoas.engordar(2)
console.log(`${pessoas.nome} tem ${pessoas.idade} anos e pesa ${pessoas.peso}Kg`)