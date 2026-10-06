let miForm = document.querySelector("#miForm")
let valorTarea = document.querySelector("#valorTarea")
let nuestraLista = document.querySelector("#nuestraLista")

miForm.addEventListener("submit", (e) => {
    e.preventDefault()
    crearTarea(valorTarea.value)
})

const crearTarea = (tarea) => {

    let nuestroHTML = `<li>${tarea} <button onclick="borrarElemento(this)">Borrar</button> </li>`
    nuestraLista.insertAdjacentHTML("beForend", nuestroHTML)
    valorTarea.value = ""
    valorTarea.focus()
}

const borrarElemento = (elementoABorrar) => {
    elementoABorrar.parentElement.remove()
}