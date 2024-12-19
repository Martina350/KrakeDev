// recuperarTexto=function(idComponente){
//     let componente=document.getElementById(idComponente);
//     let valorComponente=componente.value;
//     return valorComponente
// }

/////Arrows funcion
recuperarTexto=(idComponente)=>{
    let componente=document.getElementById(idComponente);
    let valorComponente=componente.value;
    return valorComponente;
}

recuperarEntero=(idComponente)=>{
    let valorTexto=recuperarTexto(idComponente);
    let valorEntero=parseInt(valorTexto);
    return valorEntero;
}

recuperarFloat=(idComponente)=>{
    let valorTexto=recuperarTexto(idComponente);
    let valorFlotante=parseFloat(valorTexto);
    return valorFlotante;
}