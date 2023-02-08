function calcular() {
    var i = window.document.getElementById('inicio')
    var f = window.document.getElementById('fim')
    var p = window.document.getElementById('passo')
    var i = Number(i.value)
    var f = Number(f.value)
    var p = Number(p.value)
    var res = window.document.getElementById('res')
    res.innerHTML = `<p>Contando</p><p>Passo ${i}</p>` 
}
var i = 1
 while(i <= f) {
        console.log(i);
        i++;
    }