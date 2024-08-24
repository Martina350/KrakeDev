esMayuscula=function(caracter){
    let codigoAscii=caracter.charCodeAt(0);
    if(codigoAscii>=65 && codigoAscii<=90){
        return true;
    }else{
        return false
    }
}

let palabraSecreta;
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
        console.log(palabra);
    }
    palabraSecreta=palabra;
    console.log("PALABRA SECRETA GUARDADA: ", palabraSecreta);
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
    let letrasEncontradas;
    let letraActual;
    for (let i=0;i<palabraSecreta.length;i++){
        letraActual=palabraSecreta.charAt(i);
        if(letraActual==letra){
            mostrarLetra(letra,i);
            letrasEncontradas++;
        }
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
            }
        }
    }
    if(encontrarLetraMayuscula!=1){
        alert("SOLO SE ACEPTAN MAYUSCULAS");
    }else{
        validar(coincideLetra);
    }  
}