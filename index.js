precio = 400000; /* Valor Preico */

precioSpan = document.querySelector(".precio-inicial"); /* Selecciono elemento DOM ".precio-inicial" */
precioSpan.innerHTML = precio;

function botonAumentar () {
    cantidadSpan = document.querySelector(".cantidad"); /* Selecciono elemento DOM '.cantidad' */
    cantidad = Number(cantidadSpan.innerHTML); /* Transformo DOM de String a Número */
    cantidad = cantidad + 1; /* Valor asignado */
    cantidadSpan.innerHTML = cantidad; /* Modificado HTML */

    totalSpan = document.querySelector(".valor-total"); /* Selecciono elemento DOM ".valor-total"*/
    precio = Number(document.querySelector(".precio-inicial").innerHTML); /* Selecciono y transformo DOM ".precio-inicial" de String a Número */
    total = cantidad * precio; /* Valor asignado */
    totalSpan.innerHTML = total; /* Modificado HTML */ 
}

function botonDisminuir () {
    cantidadSpan = document.querySelector(".cantidad"); /* Selecciono elemento DOM ".cantidad" */
    cantidad = Number(cantidadSpan.innerHTML); /* Transformo DOM de String a Número */
    cantidad = cantidad - 1; /* Valor asignado */
    cantidad = Math.max(0, cantidad); /* Impide que el valor sea negativo */
    cantidadSpan.innerHTML = cantidad; /* Modificado HTML */


    totalSpan = document.querySelector(".valor-total"); /* Selecciono elemento DOM ".valor-total"*/
    precio = Number(document.querySelector(".precio-inicial").innerHTML); /* Selecciono y transformo DOM '.precio-inicial' de String a Número */
    total = cantidad * precio; /* Valor asignado */
    totalSpan.innerHTML = total; /* Modificado HTML */  
    
}