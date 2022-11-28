function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    msg.innerHTML = 'Bom dia!'
    img.src = 'fotomanha.png'
    document.body.style.backgroundColor = '#7cd0f4a2'
} else if (hora >= 12 && hora < 18) {
    msg.innerHTML = 'Boa tarde!'
    img.src = 'fototarde.png'
    document.body.style.backgroundColor = '#ff7f50a2'
} else {
    msg.innerHTML = 'Boa noite!'
    img.src = 'fotonoite.png'
    document.body.style.backgroundColor = '#143ae4c0'   
}
}