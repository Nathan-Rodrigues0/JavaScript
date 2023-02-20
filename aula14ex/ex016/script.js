function contar() {
    var ini = window.document.getElementById('inicio')
    var fi = window.document.getElementById('fim')
    var pa = window.document.getElementById('passo')
    var res = document.getElementById('res')
    
    if (ini.value.length == 0 || fi.value.length == 0 || pa.value.length == 0) {
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar !'
    } else {
        res.innerHTML = 'Contando: <br>'
        //transformando string em numbers
        var i = Number(ini.value)
        let f = Number(fi.value)
        let p = Number(pa.value)
        if (p <= 0) {
            window.document('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
        for(let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F601}`
            }
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F601}`
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }
}