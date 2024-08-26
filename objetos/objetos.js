probarAtributos=function(){
    let persona={
        nombre:"Martina",
        apellido:"Leon",
        edad:24,
        vivo:true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.vivo==false){
        console.log("NO ESTA VIVO");
    }else{
        console.log("ESTA VIVO");
    }
}

crearProducto=function(){
    let producto1={
        nombre:"Coca-Cola",
        precio:3.39,
        stock:300
    }
    let producto2={
        nombre:"Pepsi",
        precio:2.50,
        stock:400
    }
    console.log(producto1.nombre);
    console.log(producto2.nombre);
    if(producto1.stock>producto2.stock){
        console.log("PRODUCTO1 TIENE MAYOR STOCK");
    }else{
        console.log("PRODUCTO2 TIENE MAYOR STOCK");
    }
}