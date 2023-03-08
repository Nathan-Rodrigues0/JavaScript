//fatorial = 5! = 5x4x3x2x1
function fatorial(num) {
    var fat = 1
    for(var f = num; f > 1; f--) {
        // fat = fatoral *= vezes igual a 'c' = valor
        fat *= f
    }
    return fat
}
console.log(fatorial(5))