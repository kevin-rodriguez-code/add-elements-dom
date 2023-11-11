 // Aquí tu código
const agregar = document.getElementById("agregar")
const lista = document.getElementById("lista")

agregar.addEventListener("click",function(){
    const nuevoElemento = prompt("añade un nuevo elemento")
    const elementoLista = document.createElement ("li")
    elementoLista.textContent = nuevoElemento
    lista.appendChild(elementoLista)
})