var num = document.getElementById('inum')
var lista = document.querySelector('select#ilista')
var res = document.getElementById('res')
var valores = []

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value)) {
        window.alert('Tudo ok!')
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

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
