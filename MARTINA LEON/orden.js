let personas=[
    {nombre: "Marcos", edad:18},
    {nombre: "Roberto", edad:15},
    {nombre: "Kate", edad:25},
    {nombre: "Diana", edad:12},
    {nombre: "Benja", edad:5}
];

agregarPersonas=function(){

    let cajaNombre=recuperarTexto("txtNombre")
    let nombre=cajaNombre
    let cajaEdad=recuperarInt("txtEdad")
    let edad=cajaEdad

    let valido=false;

    if(nombre.length>=3){
        console.log(nombre)
        valido=true;
    }else{
        valido=false;
        console.log(nombre,"ERROR")
        mostrarTexto("lblErrorNombre","EL NOMBRE DEBE TENER AL MENOS 3 CARACTERES")
    }
    if(edad>0 && edad<=100){
        console.log(edad)
        valido=true;
    }else{
        valido=false;
        console.log(edad,"ERROR")
        mostrarTexto("lblErrorEdad","LA EDAD DEBE SER UN NUMERO ENTRE 0 Y 100");
        }
        
    if(valido){
        let nuevaPersona={nombre: nombre, edad:edad};
        personas.push(nuevaPersona);
        alert("PERSONA AGREGADA CORRECTAMENTE")
        console.log("PERSONA AGREGADA")
    }else{
        console.log("PERSONA NO AGREGADA")
    }
    mostrarPersonas();
}


mostrarPersonas=function(){
    let cmpTabla=document.getElementById("tablaPersonas");
    let contenidoTabla=`<table><tr>
    <th>EDAD</th>
    <th>NOMBRE</th>
    </tr>`
    let elementoPersonas;
    for(let i=0;i<personas.length;i++){
        elementoPersonas=personas[i];
        contenidoTabla+=
        "<tr><td>"+elementoPersonas.edad+"</td>"
        +"<td>"+elementoPersonas.nombre+"</td>"
        +"</tr>";
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}

encontrarMayor=function(){
let personaMayor=personas[0];
let elementoPersona;
    for(let i=1;i<personas.length;i++){
        elementoPersona=personas[i]
        console.log(elementoPersona.nombre,elementoPersona.edad)
        if(elementoPersona.edad>personaMayor.edad){
            personaMayor=elementoPersona;
        }
    }
    return personaMayor;
}

determinarMayor=function(){
    let mayor=encontrarMayor();
    mostrarTexto("lblMayor","LA PERSONA MAYOR ES "+mayor.nombre+" CON "+mayor.edad);
}

encontrarMenor=function(){
    let personaMenor=personas[0];
    let elementoPersona;
        for(let i=1;i<personas.length;i++){
            elementoPersona=personas[i]
            console.log(elementoPersona.nombre,elementoPersona.edad)
            if(elementoPersona.edad<personaMenor.edad){
                personaMenor=elementoPersona;
            }
        }
        return personaMenor;   
}

determinarMenor=function(){
    let menor=encontrarMenor();
    mostrarTexto("lblMenor","LA PERSONA MENOR ES "+menor.nombre+" CON "+menor.edad);    
}