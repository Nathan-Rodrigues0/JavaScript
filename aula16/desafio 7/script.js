var num = document.getElementById('inum')
var lista = document.querySelector('select#ilista')
var res = document.getElementById('res')
var valores = [] //vetor para analisar os dados

//antes! colocar variaveis para transformar e manipular os controles

function adicionar() {
    // verificando se é um número e que não estiver na lista
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        //valores esta sendo adicionado no vetor que esta recendo o Number(num.value) = um número
        valores.push(Number(num.value))
        //criando um item = option
        let item = document.createElement('option')
        //dando valor ao item em um texto
        item.text = `Valor ${num.value} adicionado`
        //adicionando na lista o item
        lista.appendChild(item)
        //zerando o res
        res.innerHTML = ''
} else {
    window.alert('Valor inválido ou já encontrado na lista.')
}
//deixando o (num) em branco inicialmente / apagando automaticamente
num.value = ''
//voltando ao (num) para ser clicavel
num.focus()
}


function isNumero(n) {
    //se o número for maior e o número for menor que 100
    if(Number(n) >= 1 && Number(n) <= 100) {
    return true
} else {
    return false
}
}

function inLista(n, l){
    //se na lista for diferente de -1 (valor nao encontrado) / ! = não
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function finalizar() {
    //se o vetor estiver vazio
    if (valores.length == 0 ) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        //posições de valores (númericos)
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        //for = var pos (posições) in = em valores
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) 
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}. </p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}. </p>`
    }
}