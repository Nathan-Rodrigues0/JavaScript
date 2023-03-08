//function de calculo de fatorial de maneira recursiva
function fatorial(num) {
    if (num == 1) {
        return 1
    } else {
        //o numero vezes o fatorial do numero anterior/ ex: 5 x 4!
        return num * fatorial(num-1)
    }
}
console.log(fatorial(4))