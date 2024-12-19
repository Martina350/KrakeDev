// ejecutarSumar=function(){
//     let valor1=recuperarTexto("txtValor1");
//     let valor2=recuperarTexto("txtValor2");
//     console.log("Valor 1>>>"+valor1+" Valor 2>>>"+valor2)
// }

ejecutarSumar=()=>{
    let resultadosuma;
    let valor1=recuperarEntero("txtValor1");
    let valor2=recuperarEntero("txtValor2");
    console.log("Valor 1>>>"+valor1+" Valor 2>>>"+valor2)
    resultadosuma=sumar(valor1,valor2);
    console.log(resultadosuma)
}

sumar=(valo1,valor2)=>{
    let suma=valo1+valor2;
    return suma;
}

ejecutarRestar=()=>{
    let resultadoresta;
    let valor1=recuperarFloat("txtValor1");
    let valor2=recuperarFloat("txtValor2");
    console.log("Valor 1>>>"+valor1+" Valor 2>>>"+valor2)
    resultadoresta=resta(valor1,valor2);
    console.log(resultadoresta)
}

resta=(num1,num2)=>{
    let resta=num1-num2;
    return resta;
}