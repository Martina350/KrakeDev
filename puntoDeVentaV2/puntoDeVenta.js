calcularValorTotal = function () {
   
    let nombreProducto=recuperarTexto("txtProducto");
    let precioProducto=recuperarFloat("txtPrecio"); 
    let cantidad=recuperarInt("txtCantidad"); 

    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    if (esProductoValido(nombreProducto, "lblError1")&esPrecioValido(precioProducto, "lblError3")& esCantidadValida(cantidad, "lblError2")) {
        valorSubtotal = calcularSubtotal(precioProducto, cantidad);
        mostrarTexto("lblSubtotal", valorSubtotal);
   
        valorDescuento=calcularDescuentoPorVolumen(valorSubtotal, cantidad);
        mostrarTexto("lblDescuento",valorDescuento);

        valorIVA = calcularIVA(valorSubtotal-valorDescuento);
        mostrarTexto("lblValorIVA", valorIVA);  

        let subtotal = parseFloat(valorSubtotal);
        let descuento = parseFloat(valorDescuento);
        let IVA = parseFloat(valorIVA);

        valorTotal = calcularTotal(subtotal,descuento,IVA);
        mostrarTexto("lblTotal", valorTotal);
    }else{
        mostrarTexto("lblSubtotal","0.0");
        mostrarTexto("lblDescuento","0.0");
        mostrarTexto("lblValorIVA","0.0");
        mostrarTexto("lblTotal","0.0");
    }
}

esProductoValido = function (producto, idComponenteProducto) {
    let hayErrores = false
    if (producto == "") {
        mostrarTexto(idComponenteProducto, "CAMPO OBLIGATORIO")
        hayErrores = true
    }
    if (producto.charCodeAt(0)>=48 && producto.charCodeAt(0)<=57) {
        mostrarTexto(idComponenteProducto, "INGRESE EL NOMBRE DEL PRODUCTO")
        hayErrores = true
    }
    if (producto.length >= 10) {
        mostrarTexto(idComponenteProducto, "NO PUEDE TENER MAS DE 10 CARACTERES")
        hayErrores = true
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteProducto, "")
    }
    return !hayErrores;
}

esCantidadValida = function (cantid, idComponenteCantidad) {
    let hayErrores = false
    if (isNaN(cantid)) {
        mostrarTexto(idComponenteCantidad, "CAMPO OBLIGATORIO - SOLO NUMEROS")
        hayErrores = true
    }
    if (cantid < 0 || cantid > 100) {
        mostrarTexto(idComponenteCantidad, "LA CANTIDAD DEBE SER ENTRE 0 Y 100")
        hayErrores = true
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteCantidad, "")
    }
    return !hayErrores;
}

esPrecioValido = function (precio, idComponentePrecio) {
    let hayErrores = false
    if (isNaN(precio)) {
        mostrarTexto(idComponentePrecio, "CAMPO OBLIGATORIO - SOLO NUMEROS")
        hayErrores = true
    }
    if (precio < 0 || precio > 50) {
        mostrarTexto(idComponentePrecio, "EL PRECIO DEBE SER ENTRE 0 Y 50")
        hayErrores = true
    }
    if (hayErrores == false) {
        mostrarTexto(idComponentePrecio, "")
    }
    return !hayErrores;
}

limpiar = function () {
    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtCantidad", "0");
    mostrarTextoEnCaja("txtPrecio", "0.0");

    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
}
