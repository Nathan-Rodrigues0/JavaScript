var valores = [7, 8, 9, 3, 8, 2,]
//estrutura for com o arrays

/*for(var pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

//estrutura simplificada
for(var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}