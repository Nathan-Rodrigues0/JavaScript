function calcular() {
    var num = window.document.getElementById('num1')
    var res = window.document.getElementById('res')
    var vel = Number(num.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h<strong></p>`
    if (vel >= 90) {
        res.innerHTML += '<p>Você esta <strong>MULTADO</strong> por excesso de velocidade e ter ultrapassado o limite</p>'
    } else {
        res.innerHTML += '<p><strong>MUITO BEM</strong>. Dirige sempre com o cinto de segurança!</p>'
    }
}