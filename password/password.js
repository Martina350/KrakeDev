ejecutarValidacion=function(){
    let password;
    let resultadoValidacion;
    password=recuperarTexto("txtPassword")
    resultadoValidacion=validarPassword(password);
    if(resultadoValidacion==""){
        mostrarTexto("lblResultado", "PASSWORD INCORRECTO");
    } else {
        mostrarTexto("lblResultado", resultadoValidacion="PASSWORD CORRECTO");
    }
}


validarPassword=function(password){

    let existeError = false;
    if(password.length < 8 || password.length > 16){
        mostrarTexto("lblErrorLongitud","LA CONTRASEÑA DEBE TENER ENTRE 8 Y 16 CARACTERES")
        existeError=true;
    }else{
        mostrarTexto("lblErrorLongitud"," ");
    }

    let tieneMayuscula = false;
    let tieneDigito = false;
    let tieneCaracterEspecial = false;

    for(let i = 0; i < password.length; i++){
        let caracter=password.charAt(i);
        if(esMayuscula(caracter)){
            tieneMayuscula=true;
        }else if(esDigito(caracter)){
            tieneDigito=true;
        }else if(esCaracterEspecial(caracter)){
            tieneCaracterEspecial=true;
        }
    }

    if(!tieneMayuscula){
        mostrarTexto("lblErrorMayuscula","LA CONTRASEÑA DEBE TENER AL MENOS UNA LETRA MAYÚSCULA");
        existeError = true;
    }else{
        mostrarTexto("lblErrorMayuscula"," ");
    }

    if(!tieneDigito){
        mostrarTexto("lblErrorDigito","LA CONTRASEÑA DEBE TENER AL MENOS UN DÍGITO");
        existeError = true;
    }else{
        mostrarTexto("lblErrorDigito"," ");
    }

    if(!tieneCaracterEspecial){
        mostrarTexto("lblErrorEspecial","LA CONTRASEÑA DEBE TENER AL MENOS UN CARÁCTER ESPECIAL *, -, _");
        existeError = true;
    }else{
        mostrarTexto("lblErrorEspecial"," ");
    }
    return !existeError; 
}
