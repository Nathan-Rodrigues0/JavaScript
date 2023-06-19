var num = document.getElementById('inum')
var lis = document.getElementById('ilis')
var res = document.getElementById('res')
var valores = []

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lis.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
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