let palabraSecreta;
let intentos=0;
let coincidencias=0;
let errores=0;

esMayuscula=function(caracter){
    let codigoAscii=caracter.charCodeAt(0);
    if(codigoAscii>=65 && codigoAscii<=90){
        return true;
    }else{
        return false
    }
}

guardarPalabra=function(){
    let letraCadena;
    let encontrarLetraMayuscula=0;
    let palabra=recuperarTexto("txtSecreta")
    if(palabra.length==5){
        for(let i=0;i<palabra.length;i++){
        letraCadena=palabra.charAt(i);
            if(esMayuscula(letraCadena)){
                encontrarLetraMayuscula++;
            }
        }
    }
    if(encontrarLetraMayuscula!=5){
        alert("INGRESA UNA PALABRA DE EXACTAMETE 5 LETRAS MAYUSCULAS");
    }else{
        palabraSecreta=palabra;
        console.log("PALABRA SECRETA GUARDADA: ", palabraSecreta);
    }
}

mostrarLetra=function(letra,posicion){
   letra=palabraSecreta.charAt(posicion);
   if(posicion==0){
    mostrarTexto("div0",letra)
    console.log(letra)
   }else if(posicion==1){
    mostrarTexto("div1",letra)
   }else if(posicion==2){
    mostrarTexto("div2",letra)
   }else if(posicion==3){
    mostrarTexto("div3",letra)
   }else if(posicion==4){
    mostrarTexto("div4",letra)
   }
}

validar=function(letra){
    let letrasEncontradas=0;
    for (let i=0;i<palabraSecreta.length;i++) {
        if (palabraSecreta.charAt(i)==letra) {
            mostrarLetra(letra, i);
            letrasEncontradas++;
            coincidencias++;
            console.log("COINCIDENCIAS ", coincidencias);
        }
    }
    if(letrasEncontradas==0){
        alert("LA LETRA NO ES PARTE DE LA PALABRA")
        errores++;
        mostrarAhorcado();
    }
}

ingresarLetra=function(){
    let letraCadena;
    let coincideLetra;
    let encontrarLetraMayuscula=0;
    let palabra=recuperarTexto("txtLetra")
    if(palabra.length==1){
        for(let i=0;i<palabra.length;i++){
        letraCadena=palabra.charAt(i);
        coincideLetra=palabra.charAt(i);
            if(esMayuscula(letraCadena)){
                encontrarLetraMayuscula++;
                intentos++;
                console.log("INTENTOS: ",intentos)
            }
        }
    }
    if(encontrarLetraMayuscula!=1){
        alert("SOLO SE ACEPTAN MAYUSCULAS");
    }else{
        validar(coincideLetra);
        mostrarTextoEnCaja("txtLetra", "")
        if (coincidencias==5) {
            mostrarImagen("ahorcadoImagen","ganador.gif");   
        }
        if (intentos==10) {
            mostrarImagen("ahorcadoImagen","gameOver.gif");
        }
    }  
}

mostrarAhorcado=function(){
    if(errores==1){
        mostrarImagen("ahorcadoImagen","Ahorcado_01.png");
    }else if(errores==2){
        mostrarImagen("ahorcadoImagen","Ahorcado_02.png");
    }else if(errores==3){
        mostrarImagen("ahorcadoImagen","Ahorcado_03.png");
    }else if(errores==4){
        mostrarImagen("ahorcadoImagen","Ahorcado_04.png");
    }else if(errores==5){
        mostrarImagen("ahorcadoImagen","Ahorcado_05.png");
    }else if(errores==6){
        mostrarImagen("ahorcadoImagen","Ahorcado_06.png");
    }else if(errores==7){
        mostrarImagen("ahorcadoImagen","Ahorcado_07.png");
    }else if(errores==8){
        mostrarImagen("ahorcadoImagen","Ahorcado_08.png");
    }else if(errores==9){
        mostrarImagen("ahorcadoImagen","Ahorcado_09.png");
    }
    
    }
    