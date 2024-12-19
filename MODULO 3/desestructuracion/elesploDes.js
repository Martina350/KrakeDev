recuperar=()=>{
    let frutas=["pera","manzana","sandia"]
    frutas.push("banana");
    return frutas;
}

testRecuperar=()=>{
    let misFrutas= recuperar();
    let frutaPrimera=misFrutas[0];
    let otraFrutas=misFrutas[1];

    console.log("Fruta uno: "+frutaPrimera);
    console.log("Fruta dos: "+otraFrutas);

}

testRecuperarDes=()=>{
    let [priemraFruta,segundaFruta,tercerFruta]=recuperar();
    console.log("uno>>> "+priemraFruta);
    console.log("dos>>> "+segundaFruta);
    console.log("tres>>> "+tercerFruta);
}