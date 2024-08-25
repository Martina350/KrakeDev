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
            aleatorios.push(numeroAleatorio());
        }
    console.log(aleatorios);
    }
}