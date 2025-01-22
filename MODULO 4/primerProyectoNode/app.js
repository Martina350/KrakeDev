const express=require("express");
const app=express();
const puerto=3001;
const bodyParser=require("body-parser")
//contacto: id,nombre,apellido,celular

app.use(bodyParser.json());

app.use("/contactos",(request,response,next)=>{
    console.log("INGRESA A MIDDLEWARE");
    console.log("HEADERS: ",request.headers);
    console.log("BODY: ",request.body );
    next();
});

app.get("/contactos",(request,response)=>{
    const contactos=[
        {id:1,nombre:"Martrina",apellido:"Leon",celular:"0962837277"},
        {id:2,nombre:"Eric",apellido:"Cartman",celular:"5553311023"},
        {id:3,nombre:"Kenny",apellido:"McCormick",celular:"6662277089"}
    ];
    console.log("INGRESA AL GET")
    response.send(contactos);
});

app.post("/contactos",(request,response)=>{
    request.body.id=4;
    response.send(request.body);
});

app.put("/contactos/:idParam",(request,response)=>{
    const id=request.params.idParam;
    console.log("id: ",id);
    response.send(request.body);
});

app.delete("/contactos/:id",(request,response)=>{
    const id=request.params.id;
    console.log("id: ",id);
    response.send();
});

app.listen(puerto,()=>{
    console.log("SERVIDOR LISTO EN EL PUERTO "+3001);
}); 