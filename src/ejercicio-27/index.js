// Escribe tu código aquí:
// Via 1
const numeros = [1, 2, 3, 4, 5]
numeros.forEach((num)=>{console.log(num*2)})

// Via 2
function numeroPorDos(numero){
    console.log(numero * 2)
}

numeros.forEach(numeroPorDos)