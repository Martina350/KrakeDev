calcularTasaInteres=function(ingresoAnual){
    let tasa;
    if(ingresoAnual<300000){
        tasa=16;
    }else if(ingresoAnual>=300000 && ingresoAnual<500000){
        tasa=15;
    }else if (ingresoAnual>=500000 && ingresoAnual<1000000){
        tasa=14;
    }else if (ingresoAnual>=1000000 && ingresoAnual<2000000){
        tasa=13;
    }else{
        tasa=12;
    }
    return tasa;
}

calcularCapacidadPago=function(edad,ingresos,egresos){
    let saldoRestante=ingresos-egresos;
    let porcentajeCapacidad;
    if(edad>50){
        porcentajeCapacidad=0.30;
    }else{
        porcentajeCapacidad=0.40;
    }
    let cuotaMensual=saldoRestante*porcentajeCapacidad;
    return cuotaMensual;
}

calcularDescuento=function(precio,cantidad){
    let descuento=0.00;
    if(cantidad<3){
        descuento=0.00;
    }else if(cantidad>=3 || cantidad<5){
        descuento=0.02;
    }else if(cantidad>=6 || cantidad<11){
        descuento=0.03;
    }else if(cantidad>=12){
        descuento=0.04;
    }
    let valorTotal=precio*cantidad;
    let valorPagar= valorTotal-(valorTotal*descuento);
    return valorPagar;
}

determinarColesterol=function(nivelColesterol){
    if(nivelColesterol<100){
        return "Optimo (lo mejor para su salud)"
    }else if (nivelColesterol>=100 && nivelColesterol<129){
        return "Casi optimo"
    }else if (nivelColesterol>=130 && nivelColesterol<159){
        return "Limite superior al rango normal"
    }else if(nivelColesterol>=160 && nivelColesterol<189){
        return "Alto"
    }else if(nivelColesterol>=190){
        return "Muy alto"
    }
}

validarClave=function(clave){
    if(clave.lenght>8 && clave.lenght<=16){
        return true;
    }else{
        return false
    }
}

esMayuscula=function(caracter){
    let codigoCaracter=caracter.charCodeAt(0);
    if(codigoCaracter>=65 && codigoCaracter<=90){
        return true;
    }else{
        return false
    }
}

esMinuscula=function(caracter){
    let codigoCaracter=caracter.charCodeAt(0);
    if(codigoCaracter>=97 && codigoCaracter<=122){
        return true;
    }else{
        return false
    }
}

esDigito=function(caracter){
    let codigoAscii=caracter.charCodeAt(0);
    if(codigoAscii>= 48 && codigoAscii <=57){
        return true;
    }else{
        return false;
    }
}

darPermiso=function(notaMatematica, notaFisica, notaGeometria){
    if(notaMatematica >= 90 || notaFisica >= 90 || notaGeometria >= 90){
        return true;
    }else{
        return false;
    }
}

otorgarPermiso=function(notaMatematica, notaFisica, notaGeometria){
    if(notaMatematica >= 90 || notaFisica >= 90 && notaGeometria >= 80){
        return true;
    }else{
        return false;
    }
}

dejarSalir=function(notaMatematica, notaFisica, notaGeometria){
    if(notaMatematica >= 90 || notaFisica >= 90 || notaGeometria >= 90){
        return true;
    }else if(notaFisica>notaMatematica){
        return true;
    }else{
        return false;
    }
}