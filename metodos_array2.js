const lenguajesDeProgramacion = ["Javascript",
    "Python", "C#", "Ruby", "PHP", "LISP"
]

//Filter
nuevoArray = lenguajesDeProgramacion.filter(
    lenguaje => lenguaje === 'Javascript'
)
console.log(nuevoArray)
// Comprobar si un elemento existe

const resultado = lenguajesDeProgramacion.includes('Ruby')
console.log(resultado)

//Some - Devuelve si al menos uno cumple la condicion
const numeros = [10, 20, 30, 40, 50]
const resultadoNum = numeros.some(numero => numero > 15)
console.log('resultado', resultadoNum)

// Find - Devuelve si el primer elemento que cumpla la condicion
const resultadoNum2 = numeros.find(numero => numero > 15)
console.log('resultado num2', resultadoNum2)

//Every - Retorna true o false si todos cumplen la condicion
const resultadoNum3 = numeros.find(numero => numero > 15)
console.log('resultado num3', resultadoNum3)

// Reduce - Acumulador de algun total
const resultadoNum4 = numeros.reduce((total, numero) => numero + total, 0)   
console.log ('resultado num 4', resultadoNum4)

//ForEach = Itera en cada un de los elementos de un Array
const nuevoArray2 = lenguajesDeProgramacion.forEach((Lenguaje, index) => lenguaje)
console.log('Nuevo array 2', nuevoarray2)

//Crea un nuevo array apartir de uno original
const arrayMap = lenguajesDeProgramacion.map(Lenguiaje => lenguaje)
console.log('arrayMap: ', array)