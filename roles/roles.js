
let esNuevo=false;

let empleados = [
    {cedula:"1714616123",nombre:"JOHN",apellido:"CENA",sueldo:500.0},
    {cedula:"0914632123",nombre:"LUISA",apellido:"GONZALES",sueldo:900.0},
    {cedula:"1748592631",nombre:"DAYANNARA",apellido:"CAMPOVERDE",sueldo:1000.0}
]

mostrarOpcionEmpleado=function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
}

mostrarOpcionRol=function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen=function(){
    mostrarComponente("divResumen");
    ocultarComponente("divRol");
    ocultarComponente("divEmpleado");
}

mostrarEmpleados=function(){
    let cmpTabla=document.getElementById("tablaEmpleados");
    let contenidoTabla=`<table><tr>
    <th>CEDULA</th>
    <th>NOMBRE</th>
    <th>APELLIDO</th>
    <th>SUELDO</th>
    </tr>`
    let elementoEmpleados;
    for(let i=0;i<empleados.length;i++){
        elementoEmpleados=empleados[i];
        contenidoTabla+=
        "<tr><td>"+elementoEmpleados.cedula+"</td>"
        +"<td>"+elementoEmpleados.nombre+"</td>"
        +"<td>"+elementoEmpleados.apellido+"</td>"
        +"<td>"+elementoEmpleados.sueldo+"</td>"
        +"</tr>";
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
    deshabilitarTodosLosComponentes();
}

ejecutarNuevo=function(){
    habilitarTodosLosComponentes();
    esNuevo=true;
}

buscarEmpleado=function(cedula){
    let elementoEmpleados;
    let empleadoEncontrado=null;
    for(let i=0;i<empleados.length;i++){
        elementoEmpleados=empleados[i];
        if(elementoEmpleados.cedula==cedula){
            empleadoEncontrado=elementoEmpleados;
            break;
        }
    }
    return empleadoEncontrado;
}

agregarEmpleado=function(empleado){
    let agregar;
    agregar=buscarEmpleado(empleado.cedula);
    if(agregar==null){
        empleados.push(empleado);
        mostrarEmpleados();
        return true;
    }else{
        return false;
    }
  
}

guardar=function(){
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorApellido=recuperarTexto("txtApellido");
    let valorSueldo=recuperarFloat("txtSueldo");

    if(validarCedula(valorCedula)==true && validarNombre(valorNombre)==true && validarApellido(valorApellido)==true && validarSueldo(valorSueldo)==true){
        if(esNuevo==true){
            let empleado={};
            empleado.cedula=valorCedula;
            empleado.nombre=valorNombre;
            empleado.apellido=valorApellido;
            empleado.sueldo=valorSueldo;
            let guardado=agregarEmpleado(empleado);
            if(guardado==true){
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                esNuevo=false;
            }else{
                alert("YA EXISTE UN EMPLEADO CON CEDULA:  "+ valorCedula);
            }
        }else{
            let empleado = buscarEmpleado(valorCedula);
            if(empleado){
                empleado.nombre = valorNombre;
                empleado.apellido = valorApellido;
                empleado.sueldo = valorSueldo;
                alert("EMPLEADO MODIFICADO EXITOSAMENTE"); 
            }
        }
        mostrarEmpleados();
    }
    deshabilitarTodosLosComponentes();
    mostrarTextoEnCaja("txtCedula","")
    mostrarTextoEnCaja("txtNombre","")
    mostrarTextoEnCaja("txtApellido","")
    mostrarTextoEnCaja("txtSueldo","")
}

esDigito=function(caracter){
    let codigoAscii=caracter.charCodeAt(0);
    return codigoAscii>=48 && codigoAscii<=57
}

validarCedula=function(cedula){
   let esValido=true;
    if(cedula==""){
        mostrarTexto("lblErrorCedula","CAMPO OBLIGATORIO");
        esValido=false;
    }if(cedula.length!=10){
        mostrarTexto("lblErrorCedula","DEBE TENER EXACTAMENTE 10 DIGITOS");
        esValido=false;
    }if(isNaN(cedula)){
        mostrarTexto("lblErrorCedula","DEBE INGRESAR SOLO DIGITOS");
        esValido=false;
    }
    return esValido;
}

esMayuscula=function(caracter){
    let codigoAscii=caracter.charCodeAt(0);
    return codigoAscii>=65 && codigoAscii<=90
}

validarNombre=function(nombre){
    let esValido=false;
    if (nombre.length>=3) {
        esValido=true;
        for(let i=0;i<nombre.length;i++) {
            if (!esMayuscula(nombre[i])){
                esValido=false;
                mostrarTexto("lblErrorNombre","TODOS LOS CARACTERES DEBEN SER MAYUSCULAS");
                break;
            }
        }
    }else{
        mostrarTexto("lblErrorNombre", "EL NOMBRE DEBE TENER AL MENOS 3 CARACTERES");
    }
    return esValido;
}

validarApellido=function(apellido){
    let esValido=false;
    if (apellido.length>=3) {
        esValido=true;
        for(let i=0;i<apellido.length;i++) {
            if (!esMayuscula(apellido[i])){
                esValido=false;
                mostrarTexto("lblErrorApellido","TODOS LOS CARACTERES DEBEN SER MAYUSCULAS");
                break;
            }
        }
    }else{
        mostrarTexto("lblErrorApellido", "EL APELLIDO DEBE TENER AL MENOS 3 CARACTERES");
    }
    return esValido;
}

validarSueldo=function(sueldo){
    let esValido=false;
    if(sueldo>=400.00 && sueldo<=5000.0){
        esValido=true;
    }else{
        esValido=false;
        mostrarTexto("lblErrorSueldo","EL VALOR DEBE DE SER ENTRE $400 Y $5000");
    }
    return esValido;
}

habilitarTodosLosComponentes=function(){
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
}

deshabilitarTodosLosComponentes=function(){
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

ejecutarBusqueda=function(){
    
    let valorCedula=recuperarTexto("txtBusquedaCedula");
    let empleado=buscarEmpleado(valorCedula);
    if(empleado==null){
        alert("EMPLEADO NO EXISTE");
    }else{
        mostrarTextoEnCaja("txtCedula",empleados.cedula);
        mostrarTextoEnCaja("txtNombre",empleados.nombre);
        mostrarTextoEnCaja("txtApellido",empleados.apellido);
        mostrarTextoEnCaja("txtSueldo",empleados.sueldo);
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar");
    }
    deshabilitarComponente("txtCedula");
}

buscarPorRol=function(){
    let valorCedula=recuperarTexto("txtBusquedaCedulaRol");
    let empleado=buscarEmpleado(valorCedula);
    if(empleado){
        mostrarTexto("infoCedula", empleado.cedula);
        mostrarTexto("infoNombre", empleado.nombre + " " + empleado.apellido);
        mostrarTexto("infoSueldo", empleado.sueldo);      
    }else{
        alert("EMPLEADO NO EXISTE");
    }
}

limpiar=function(){
    mostrarTextoEnCaja("txtCedula","")
    mostrarTextoEnCaja("txtNombre","")
    mostrarTextoEnCaja("tsxtApellido","")
    mostrarTextoEnCaja("txtSueldo","")
    esNuevo=false;
    deshabilitarTodosLosComponentes();
}