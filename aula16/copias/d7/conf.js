var num = document.getElementById('inum')
var lis = document.querySelector('select#ilis')
var res = document.getElementById('res')
var valores = []

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value , valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lis.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor já adicionado ou Valor inválido')
    }
    num.value = ''
    num.focus()
}

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function finalizar() {
    if(valores.length == 0) {
        window.alert('Adicione os valores antes de finalizar')
    } else {
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0

        for(var pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${total} números cadastrados. </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p> A soma de todos valores é ${soma}. </p>`
        res.innerHTML += `<p> A média dos valores é ${media}. </p>`
    }
}