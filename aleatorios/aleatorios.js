numeroAleatorio=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero
    let valorNumero
    aleatorio=Math.random();
    numeroMultiplicado=aleatorio*100;
    numeroEntero=parseInt(numeroMultiplicado);
    valorNumero=numeroEntero+1;
    return valorNumero;
}

let aleatorios=[];

generarAleatorios=function(){
    let numeroRecuperado=recuperarInt("txtNum")
    if(numeroRecuperado>=5 && numeroRecuperado<=20){
        aleatorios=[];
        for(let i=0;i<numeroRecuperado;i++){
            let numeroGenerado=numeroAleatorio();
            aleatorios.push(numeroGenerado);
        }
    mostrarResultados(aleatorios);
    console.log(aleatorios);
    }
}

mostrarResultados=function(arregloNumeros){
   let contenidoTabla="<table><tr><th>NUMEROS ALEATORIOS</th></tr>";
   for (let i=0;i<arregloNumeros.length;i++) {
    let numero=arregloNumeros[i];
    contenidoTabla+="<tr><td>" +numero+ "</td></tr>";
    }
    contenidoTabla+="</table>";
    let cmpTabla=document.getElementById("divTabla");
    cmpTabla.innerHTML = contenidoTabla;
}