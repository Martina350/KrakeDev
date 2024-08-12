calcularPromedioNotas=function(){
    let n1=recuperarFlotante("txtN1")
    let n2=recuperarFlotante("txtN2")
    let n3=recuperarFlotante("txtN3")
    let promedio = calcularPromedio(n1,n2,n3);
    cambiarTexto("resultadoPromedio", promedio);

    if (promedio>7){
        cambiarImagen("imgPromedio","./exito.gif")
    }else{
        cambiarImagen("imgPromedio","./fracaso.gif")
    }
}