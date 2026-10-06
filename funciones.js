// Funciones - Functions Expression

// Declaracion de funciones
function sumarDeclaration (n1=0, n2=0) 
{
    return n1 + n2
}
console.log(sumarDeclaration(10,10))

// Expresion de funciones
const sumarExpression = function(n1=0, n2=0)
{
    return n1 + n2
}
console.log(sumarExpression(10 + 15))

// Funciones - Arrow funciones
const sumarArrow = (n1=0, n2=0) => 
{
    return n1 + n2
}
console.log(sumarArrow(5, 50))

const sumarArrow2 = (n1=0, n2=0) => n1 + n2
console.log(sumarArrow2(10, 20))

// Arrow Functions y Array Methods
const LDP = ["JavaScript", "Python", "C#", "C++", "Ruby", "PHP", "LISP"]

const nuevoArray = LDP.map(function(lenguaje)
{
    if(lenguaje == 'Python')
    {
        return 'Mojo'
    }
    else
    {
        return lenguaje
    }
})

const nuevoArrayMap = LDP.map (lenguaje => 
{
    if(lenguaje == 'Python')
    {
        return 'ArrowMojo'
    }
    else
    {
        return lenguaje
    }
})

console.log(nuevoArray)
console.log(nuevoArrayMap)

const nuevoArray2 = LDP.filter(function(lenguaje){
    return lenguaje === 'JavaScript'
})

const nuevoArrayFilterArrow = LDP.filter(lenguaje => {
    return lenguaje !== 'JavaScript'
})

console.log(nuevoArray2)
console.log(nuevoArrayFilterArrow)