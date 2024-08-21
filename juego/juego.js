let puntosUsuario=0;
let puntosComputador=0;
jugar=function(){
    let elemento=generarElemento();
    ruta=generarRuta(elemento);
    mostrarImagen("imgResultado",ruta);
    let opcion=determinarGanador(elemento,seleccionado);
    if(opcion==0){
        mostrarTexto("lblResultado","EMPATE");
    }else if(opcion==1){
        mostrarTexto("lblResultado","PERDISTE LA PARTIDA!!");
        puntosComputador=puntosComputador+1;
        mostrarTexto("lblComputador",puntosComputador);
    }else if(opcion==2){
        mostrarTexto("lblResultado","GANASTE LA PARTIDA!!");
        puntosUsuario=puntosUsuario+1;
        mostrarTexto("lblUsuario",puntosUsuario);
    }

    if(puntosUsuario==5){
        mostrarTexto("lblGanador","HAS GANADO EL JUEGO");
    }else if(puntosComputador==5){
        mostrarTexto("lblGanador","EL COMPUTADOR TE HA VENCIDO");
    }
}

limpiar=function(){
    puntosUsuario = 0;
    puntosComputador = 0;
    mostrarTexto("lblUsuario", puntosUsuario);
    mostrarTexto("lblComputador", puntosComputador);
    mostrarTexto("lblResultado", "");
    mostrarImagen("imgResultado", "")
    mostrarTexto("lblGanador", "")
}