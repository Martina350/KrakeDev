calcularPromedioNotas=function(){
    let n1=recuperarFlotante("txtN1")
    let n2=recuperarFlotante("txtN2")
    let n3=recuperarFlotante("txtN3")
    let promedio = calcularPromedio(n1,n2,n3);
    cambiarTexto("resultadoPromedio", promedio);

    if (promedio<5 && promedio>0){
        cambiarImagen("imgPromedio","./fracaso.gif");
        cambiarTexto("lblReprobado","REPROBADO");
    }else if(promedio>=5 && promedio<=8){
        cambiarImagen("imgPromedio","./exito.gif");
        cambiarTexto("lblGoodJob","BUEN TRABAJO");
    }else if(promedio>8 && promedio<=10){
        cambiarImagen("imgPromedio","./excellent.gif")
        cambiarTexto("lblExcellent","EXCELENTE!!!");
    }else{
        cambiarImagen("imgPromedio","./incorrecto.gif")
        cambiarTexto("lblIncorrecto","DATOS INCORRECTOS");
    }

}