
let esNuevo=false;

let roles=[];

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
    deshabilitarComponente("botnGuardar");
    mostrarRoles();
}

mostrarOpcionResumen=function(){
    mostrarComponente("divResumen");
    ocultarComponente("divRol");
    ocultarComponente("divEmpleado");
    mostrarTotales();
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
        mostrarTextoEnCaja("txtCedula",empleado.cedula);
        mostrarTextoEnCaja("txtNombre",empleado.nombre);
        mostrarTextoEnCaja("txtApellido",empleado.apellido);
        mostrarTextoEnCaja("txtSueldo",empleado.sueldo);
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

calcularAporteEmpleado=function(sueldo){
    let aporteEmp;
    aporteEmp=sueldo*9.45/100;
    return aporteEmp;
}

calcularValorPagar=function(sueldo,aporte,descuento){
    let valorAPagar= sueldo-aporte-descuento;
    return valorAPagar;
}

calcularRol=function(){
    let sueldo=recuperarFloatDiv("infoSueldo");
    let descuentos=recuperarFloat("txtDescuentos");

    if (isNaN(descuentos) || descuentos<0 || descuentos>sueldo) {
        mostrarTexto("lblErrorDescuentos","ERROR");
        return;
    } else {
        mostrarTexto("lblErrorDescuentos","");
    }

    let aporteEmpleado=calcularAporteEmpleado(sueldo);
    mostrarTexto("infoIESS",aporteEmpleado.toFixed(2));

    let valorAPagar=calcularValorPagar(sueldo,aporteEmpleado,descuentos);
    mostrarTexto("infoPago",valorAPagar.toFixed(2));

    habilitarComponente("botnGuardar");
}

buscarRol=function(cedula){
    let rolEncontrado=null;
    for (let i=0;i<roles.length;i++) {
        if(roles[i].cedula==cedula) {
            rolEncontrado=roles[i];
            break;
        }
    }
    return rolEncontrado;
}

agregarRol=function(rol){
    let elementoRol;
    if(roles.length==0) {
        roles.push(rol);
    }else{
        elementoRol=buscarRol(rol.cedula);
        if(elementoRol==null){
            roles.push(rol);
        }else{
            alert("YA EXISTE")
        }
    }
}

calcularAporteEmpleador=function(sueldo) {
    let aporte;
    aporte=sueldo*11.45/100
    return aporte;
}

guardarRol=function(){
    let totalpago=recuperarTextoDiv("infoPago");
    let aporteIess=recuperarTextoDiv("infoIESS");
    let cedula=recuperarTextoDiv("infoCedula");
    let nombre=recuperarTextoDiv("infoNombre");
    let sueldo=recuperarFloatDiv("infoSueldo");
    let aporteEmpleador=calcularAporteEmpleador(sueldo);
    let rol={};
    rol.aporteEmpleado=aporteIess;
    rol.aporteEmpleador=aporteEmpleador;
    rol.cedula=cedula;
    rol.nombre=nombre;
    rol.sueldo=sueldo;
    rol.valorAPagar=totalpago

    agregarRol(rol);

    alert("ROL GUARDADO EXITOSAMENTE");
    deshabilitarComponente("botnGuardar");
}

mostrarRoles=function(){
    let cmpTabla=document.getElementById("tablaResumen");
    let contenidoTabla=`<table><tr>
    <th>CEDULA</th>
    <th>NOMBRE</th>
    <th>VALOR A PAGAR</th>
    <th>APORTE EMPLEADO</th>
    <th>APORTE EMPLEADOR</th>
    </tr>`
    let elementoRoles;
    for(let i=0;i<roles.length;i++){
        elementoRoles=roles[i];
        contenidoTabla+=
        "<tr><td>"+elementoRoles.cedula+"</td>"
        +"<td>"+elementoRoles.nombre+"</td>"
        +"<td>"+elementoRoles.valorAPagar+"</td>"
        +"<td>"+elementoRoles.aporteEmpleado+"</td>"
        +"<td>"+elementoRoles.aporteEmpleador+"</td>"
        +"</tr>";
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;    
}

mostrarTotales=function(){
    let totalEmpleadoFloat;
    let totalEmpleado;
    let totalEmpleadorFloat;
    let totalEmpleador;
    let totalAPagar;
    let totalNominaFloat
    let toltalNomina;

    let sumaAprsl=0
    let sumaAptnl=0
    let sumaNimna=0

    for (let i = 0; i < roles.length; i++) {
        totalEmpleado = roles[i];
        totalEmpleadoFloat = parseFloat(totalEmpleado.aporteEmpleado);
        sumaAprsl=totalEmpleadoFloat+sumaAprsl
        totalEmpleador = roles[i];
        totalEmpleadorFloat = parseFloat(totalEmpleador.aporteEmpleador);
        sumaAptnl=totalEmpleadorFloat+sumaAptnl
        toltalNomina=roles[i];
        totalNominaFloat=parseFloat(toltalNomina.valorAPagar);
        sumaNimna=totalNominaFloat+sumaNimna
        totalAPagar = sumaAprsl + sumaAptnl;
    }
    mostrarTexto("infoTotalPago", totalAPagar.toFixed(2));
    mostrarTexto("infoAporteEmpresa", sumaAptnl.toFixed(2));
    mostrarTexto("infoAporteEmpleado", sumaAprsl.toFixed(2));
    mostrarTexto("infoTotalNomina",sumaNimna.toFixed(2));
    mostrarRoles();
}

limpiar=function(){
    mostrarTextoEnCaja("txtCedula","")
    mostrarTextoEnCaja("txtNombre","")
    mostrarTextoEnCaja("tsxtApellido","")
    mostrarTextoEnCaja("txtSueldo","")
    esNuevo=false;
    deshabilitarTodosLosComponentes();
}
