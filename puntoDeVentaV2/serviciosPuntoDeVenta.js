calcularValorDescuento = function (monto, porcentajeDescuento) {
    let valorDescuento;
    valorDescuento=monto*porcentajeDescuento/100;
    return valorDescuento.toFixed(2);
}

calcularIVA = function (monto) {
    let valorIVA
    valorIVA=monto*12/100;
    return valorIVA.toFixed(3);

}

calcularSubtotal = function (precio, cantidad) {
    let valorSubtotal;
    valorSubtotal=precio*cantidad;
    return valorSubtotal.toFixed(2);
}

calcularTotal= function(subtotal, descuento, iva) {
    let valorTotal;
    valorTotal=subtotal-descuento+iva;
    return valorTotal.toFixed(2);
}

calcularDescuentoPorVolumen=function(subtotal,cantidad){
    if(cantidad<3){
        valorDescuento=subtotal*0;
    }else if(cantidad>=3 && cantidad<=5){
        valorDescuento=subtotal*3/100;
    }else if(cantidad>=6 && cantidad<=11){
        valorDescuento=subtotal*4/100;
    }else if(cantidad>=12){
        valorDescuento=subtotal*5/100;
    }
    return valorDescuento;
}