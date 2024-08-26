let clientes=[
    {cedula:"174563289",nombre:"JUAN",edad:"20"},
    {cedula:"178521477",nombre:"MARIO",edad:"50"},
    {cedula:"176985324",nombre:"PEPE",edad:"22"}
];

mostrarClientes=function(){
    let cmpTabla=document.getElementById("tablaClientes");
    let contenidoTabla="<table><tr>"+
    "</th>CEDULA</th>"+
    "</th>NOMBRE</th>"+
    "</th>EDAD</th>"+
    "</tr>";
    let elementoCliente;
    for(let i=0;i<clientes.length;i++){
        elementoCliente=clientes[i];
        contenidoTabla+=
        "<tr><td>"+elementoCliente.cedula+"</td>"
        +"<td>"+elementoCliente.nombre+"</td>"
        +"<td>"+elementoCliente.edad+"</td>"
        +"</tr>";
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}