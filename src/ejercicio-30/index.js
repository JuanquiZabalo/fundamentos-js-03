// Escribe tu código aquí:
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((total, num) => total + num, 0)

console.log(sum)

function multiplica(inicial=Number, mult2=Number){
    return inicial * mult2
}

const mult = numbers.reduce(multiplica, 1)

console.log(mult)