function fatorial(num) {
    var fa = 1
    for(var f = num; f > 1; f--){
        fa *= f
    }
    return fa
}
console.log(fatorial(4))    