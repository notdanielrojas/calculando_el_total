precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

function botonAumentar () {
    cantidadSpan = document.querySelector('.cantidad'); /* Selecciono elemento DOM */
    cantidad = Number(cantidadSpan.innerHTML); /* Transformo DOM de String a Número */
    cantidad = cantidad + 1; /* Valor asignado */
    cantidadSpan.innerHTML = cantidad; /* Modificado HTML */

    totalSpan = document.querySelector('.valor-total'); /* Selecciono elemento DOM */
    precio = Number(document.querySelector('.precio-inicial').innerHTML); /* Transformo DOM de String a Número */
    total = cantidad * precio; /* Valor asignado */
    totalSpan.innerHTML = total; /* Modificado HTML */ 
}

function botonDisminuir () {
    cantidadSpan = document.querySelector('.cantidad'); /* Selecciono elemento DOM */
    cantidad = Number(cantidadSpan.innerHTML); /* Transformo texto a número */
    cantidad = cantidad - 1; /* Valor asignado */
    cantidad = Math.max(0, cantidad - 1); /* Impide que el valor sea negativo */
    cantidadSpan.innerHTML = cantidad; /* Modificado HTML */


    totalSpan = document.querySelector('.valor-total'); /* Selecciono elemento DOM */
    precio = Number(document.querySelector('.precio-inicial').innerHTML); /* Transformo DOM de String a Número */
    total = cantidad * precio; /* Valor asignado */
    totalSpan.innerHTML = total; /* Modificado HTML */  
    
}