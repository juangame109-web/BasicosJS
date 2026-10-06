let frutas = ["manzana", "banana"]
// Agregar Naranja a el arreglo
frutas.push("naranja")

// Imprimelo en consola
console.log("nuevo arreglo despues de agregar naranja:",frutas)

// Elimina el ultimo elemento
frutas.pop()

// Imprimelo en consola
console.log("arreglo despues de eliminar el ultimo elemento:",frutas)

let numeros = [1,2,3,4,5,6]
// Itera el arreglo utilizando forEah e imprime los numeros
numeros.forEach(numeros => console.log("numeros:", numeros))

let numeros2 = [1,2,3,4,5,6]
// Utiliza map y regresa un nuevo arreglo que multiplique cada elemento por 5
// e imprimelo
const multipli_5 = numeros2.map((numero) => numero * 5)
console.log("regresa un nuevo arreglo, multiplicado por 5:", multipli_5)

let numeros3 = [1,2,3,4,5,6,7,8,9,10]
// Utiliza filter y regresa un nuevo arreglo de los números pares
// e imprimelo
const pares = numeros3.filter((numero) => numero % 2 === 0)
console.log("regresa un nuevo arreglo:", pares)

let numeros4 = [10, 20, 30, 40, 50, 60]
// Utiliza find y regresa un numero mayor a 45 e imprimelo
const mayor_45 = numeros4.find((numero) => numero > 45)
console.log("regresa un nuevo arreglo, numero mayor a 45:", mayor_45)

let frutas2 = ["manzana", "banana", "naranja"]
// Utiliza includes para ver que existe  e imprimelo
console.log("verifica si 'banana' existe:", frutas2.includes("banana"))
console.log("verifica si 'uva' existe:", frutas2.includes("uva"))
console.log("verifica si 'manzana' existe:", frutas2.includes("manzana"))

let numeros5 = [1,2,3,4,5,6,7,8,9,10]
// Utiliza slice y regresa un nuevo arreglo [2, 3, 4]
const nuevos_numeros = numeros5.slice(1, 4)
console.log("regresa un nuevo arreglo:", nuevos_numeros)

let numeros6 = [1,2,3,4]
// Utiliza reduce y has la suma de los elementos y regresa 10 e imprimelo
const suma = numeros6.reduce((acumulador, numero) => acumulador + numero, 0)
console.log("regresa la suma de los elementos:", suma)