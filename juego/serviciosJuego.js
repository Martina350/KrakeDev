obtenerAleatorio=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero
    let valorNumero
    aleatorio=Math.random();
    numeroMultiplicado=aleatorio*3
    numeroEntero=parseInt(numeroMultiplicado);
    valorNumero=numeroEntero+1
    return valorNumero;
}

generarElemento=function(){
    let numero=obtenerAleatorio();
    let elemento;
    if(numero==1){
        return elemento="Piedra";
    } else if(numero==2){
        return elemento="Papel";
    } else if(numero==3){
        return elemento="Tijera";
    }
}

determinarGanador=function(eleccionJugador1,eleccionJugador2){
    if(eleccionJugador1==eleccionJugador2){
        return 0;
    }else if(eleccionJugador1=="Piedra" && eleccionJugador2=="Tijera" || eleccionJugador1=="Papel" && eleccionJugador2=="Piedra"  || eleccionJugador1=="Tijera" && eleccionJugador2=="Papel" ){
        return 1;
    }else if(eleccionJugador2=="Piedra" && eleccionJugador1=="Tijera" || eleccionJugador2=="Papel" && eleccionJugador1=="Piedra"  || eleccionJugador2=="Tijera" && eleccionJugador1=="Papel" ){
        return 2;
    }
}

generarRuta=function(nombre){
    if(nombre=="Piedra"){
        return "./imagenes/piedra.jpg";
    }else if(nombre=="Papel"){
        return "./imagenes/papel.jpg";
    }else if(nombre=="Tijera"){
        return "./imagenes/tijera.jpg";
    }
}