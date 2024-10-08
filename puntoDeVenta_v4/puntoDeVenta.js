calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto=recuperarTexto("txtProducto");
    let precioProducto=recuperarFloat("txtPrecio"); // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad=recuperarInt("txtCantidad"); // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    let porcentajeDescuento=recuperarInt("txtPorcentajeDescuento");

    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    //1. Recuperar el nombre del producto como String
    //2. Recuperar el precio como float
    //3. Recuperar cantidad como int
    //4. Recuperar el porcentaje de descuento como int

    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    // Tomar en cuenta el orden de como pasa los parametos de la funcion y colocar bien
    // los parametros cuando invoca la funcion.
    //5. Mostrar valorSubtotal en el componente lblSubtotal
    // Utilizar mostrarTexto
        /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4  
            Subtotal esperado: 54
        Si el caso de prueba es exitoso, hacer un commit
     */
        valorSubtotal = calcularSubtotal(precioProducto, cantidad);
        mostrarTexto("lblSubtotal", valorSubtotal);
    //6. Invocar a calcularValorDescuento y lo que devuelve guardar en la variable valorDescuento
    //7. Mostrar el resultado en el componente lblDescuento
    /*
        Caso de prueba: 
            - cantidad: 10 
            - precioProducto: 5.4  
            - descuento: 10
            - Descuento esperado: 5.4
        Si el caso de prueba es exitoso, hacer un commit
     */
        valorDescuento=calcularValorDescuento(precioProducto*cantidad,porcentajeDescuento);
        mostrarTexto("lblDescuento",valorDescuento);
    
    //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
    // El IVA debe calcularse sobre el valor del subtotal menos el descuento
    //9. Mostrar el resultado en el componente lblValorIVA    
        /*
            Caso de prueba: 
                - cantidad: 10 
                - precioProducto: 5.4  
                - descuento: 10

                    - valorSubtotal: 54
                    - descuento:5.4
                    - valorSubtotal 
                    - descuento: 48.6

                IVA esperado: 5.832

            Si el caso de prueba es exitoso, hacer un commit
        */
            valorIVA = calcularIVA(valorSubtotal-valorDescuento);
            mostrarTexto("lblValorIVA", valorIVA);  

    //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
    //11. Mostrar el resultado en el componente lblTotal
    /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4 
            - descuento: 10

                --valorSubtotal: 5.4
                --descuento: 5.4
                --IVA: 5.832

                Total esperado: 54.432

                Si el caso de prueba es exitoso, hacer un commit
       */
        valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
        mostrarTexto("lblTotal", valorTotal);
    //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
    /*
        Ejemplo: 
            Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
        Si funciona, hacer un commit
    */ 
    nombreProducto=recuperarTexto("txtProducto");
    let resumen= ("Valor a pagar por "+cantidad+" "+nombreProducto+" con el "+porcentajeDescuento+"% de descuento:USD $ "+valorTotal)
    mostrarTexto("lblResumen", resumen)
}
limpiar = function () {
    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtCantidad", "0");
    mostrarTextoEnCaja("txtPrecio", "0.0");
    mostrarTextoEnCaja("txtPorcentajeDescuento", "0");

    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
}
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
/* SI TODO FUNCIONA, HACER UN PUSH */