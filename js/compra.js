const listaDeCompra = [];

function agregarAlCarrito(idDesc,idPrec){
    let descripcion = document.getElementById(idDesc).textContent;
    let precio = document.getElementById(idPrec).textContent;
    let cantidad = 1;
    let subtotal = cantidad * parseInt(precio.slice(1));
            localStorage.setItem("auxDescripcion", descripcion);
            localStorage.setItem("auxPrecio", precio);
    let agregarProductos = {
        itemDesc : descripcion,
        itemProd : precio,
        itemCant : cantidad,
        itemSubTotal : subtotal
    };
    listaDeCompra.push(agregarProductos);
    console.log(agregarProductos),
    alert("Agregado al carrito");
    localStorageItem(listaDeCompra);
}

function actualizarCarrito(){
    let descripcion = localStorage.getItem("auxDescripcion");
    let precio = localStorage.getItem("auxPrecio");
    document.getElementById("liDesc").innerHTML= descripcion;
    document.getElementById("liPrec").innerHTML= precio;
    let listaCompleta = JSON.parse(localStorage.getItem('carrito'));
    console.log(listaCompleta);
    let mostrar=[];
    for(let lista of listaCompleta){
        console.log(lista);
        mostrar+=`<li>${lista.itemDesc} ${lista.itemProd} ${lista.itemCant} ${lista.itemSubTotal}</li>`;
        document.getElementById("idCompra").innerHTML = mostrar;
    }
}

function limpiarCarrito(){
    localStorage.clear();
    document.getElementById("liDesc").innerHTML= "Descripción";
    document.getElementById("liPrec").innerHTML= "Precio";
    document.getElementById("idCompra").innerHTML="Listado de productos comprados"
}

function localStorageItem(aLista){
    localStorage.setItem('carrito', JSON.stringify(aLista));
}