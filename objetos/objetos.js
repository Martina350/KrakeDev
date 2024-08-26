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

modificarAtributos=function(){
    let cuenta={
        numero:"258369147",
        saldo:0.0
    }
    cuenta.saldo=100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo);
}

crearCliente=function(){
    let cliente={
        cedula:"174562389",
        nombre:"Pepe"
    }
    let cliente1={};
        cliente1.nombre="Ramiro"
        cliente1.apellido="Torres"
        cliente1.cedula="174562389"   
}

probarIncrementoSaldo=function(){
    let cta={numero:"25364",saldo:34.0};
    incrementarSaldo(cta,100);
    console.log(cta.saldo);
}

incrementarSaldo=function(cuenta,monto){
    cuenta.saldo+=monto;
}

probarDeterminarMayor=function(){
    let per1={nombre:"Daniel",edad:45};
    let per2={nombre:"Luisa",edad:48};
    let mayor;
    mayor=determinarMayor(per1,per2);
    if(mayor!=null){
        console.log("EL MAYOR ES: "+mayor.nombre);
    }

}

determinarMayor=function(persona1,persona2){
    if(persona1.edad>persona2.edad){
        return persona1;
    }else if(persona2.edad>persona1.edad){
        return persona2;
    }else{
        return null;
    }
}