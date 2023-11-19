// Escribe tu código aquí:
const listaNumeros = [2, 3, 4, 5, 6]
const listaCuadrados = listaNumeros.map((num)=>{
    return num*num
})

console.log(listaCuadrados)

const listaNumeros2 = [7, 8, 9, 10]
const listaCuadrados2 = listaNumeros2.map(cuadrado)

function cuadrado(numero= Number){
    return numero*numero
}


console.log(listaCuadrados2)