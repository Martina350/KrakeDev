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
        mostrarTexto("lblErrorNombre","EL NOMBRE TENER AL MENOS 3 CARACTERES")
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
            let nuevaPersona={nombre: nombre, edad: edad};
            personas.push(nuevaPersona);
            alert("PERSONA AGREGADA CORRECTAMENTE")
            console.log("PERSONA AGREGADA")
        }else{
            console.log("PERSONA NO AGREGADA")
        }
}