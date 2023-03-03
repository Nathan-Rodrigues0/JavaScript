var reu = [5, 6, 43, 6]
//acrecentando valor por indíce
reu[4]  = 7
//colocar o valor n0 último indice
reu.push(7)
//coloca todos os elemtos em ordem crescente
reu.sort()
//indexOF = é pesquisar o valor e sua posição
 var pos = reu.indexOf(2)
 if(pos == -1) {
    console.log('O valor não foi encontrado')
} else {
   console.log(`O valor 6 está na posição ${pos}`) 
}

console.log(`Nosso vetor é o ${reu}`)