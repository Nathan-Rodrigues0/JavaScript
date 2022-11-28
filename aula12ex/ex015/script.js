function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var res01 = document.getElementById('res01')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamemte!')
    } else {
        var fsex = document.getElementsByName('radsex')
        //get=definir
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            if (idade >= 1 && idade < 10){
                var gênero = 'criança'
                img.setAttribute('src', 'crianca-m.png')
                //set=definir
            } else if (idade < 21) {
                var gênero = 'jovem'
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 50) {
                var gênero = 'adulto'
                img.setAttribute('src', 'adulto-m.png')
            } else {
                var gênero = 'idoso'
                img.setAttribute('src', 'idoso-m.png')
            }
        } else if (fsex[1].checked) {
            if (idade >= 1 && idade < 10) {
                var gênero = 'criança'
                img.setAttribute('src', 'crianca-f.png')
            } else if (idade < 21) {
                var gênero = 'jovem'
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade < 50) {
                var gênero = 'adulta'
                img.setAttribute('src', 'adulta-f.png')
            } else {
                var gênero = 'idosa'
                img.setAttribute('src', 'idosa-f.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `<h4>Detectamos ${gênero} com ${idade} anos.</h4>`
        res.appendChild(img)
        
    }
}