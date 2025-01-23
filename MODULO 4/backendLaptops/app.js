const express=require("express");
const app=express();
const puerto=3002;

app.use(express.json());

app.post("/laptops", (req, res) => {
    const laptop = req.body;
    console.log("Laptop recibida:", laptop);
    laptop.id = 1;
    res.send(laptop);
});

app.get("/laptops/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const laptop = {
        id: id,
        marca: "Lenovo",
        procesador: "Intel core i5",
        memoria: "16 GB",
        disco: "1 TB"
    };

    res.send(laptop);
});

app.get("/laptops", (req, res) => {
    const laptops = [
        { id: 1, marca: "Lenovo", procesador: "Intel core i5", memoria: "16 GB", disco: "1 TB" },
        { id: 2, marca: "HP", procesador: "Intel core i7", memoria: "8 GB", disco: "512 GB" },
        { id: 3, marca: "Dell", procesador: "AMD Ryzen 5", memoria: "16 GB", disco: "256 GB" },
        { id: 4, marca: "Acer", procesador: "Intel core i3", memoria: "4 GB", disco: "1 TB" },
        { id: 5, marca: "Asus", procesador: "Intel core i9", memoria: "32 GB", disco: "2 TB" }
    ];

    res.send(laptops);
});

app.put("/laptops/:id", (req, res) => {
    const id = parseInt(req.params.id);
    console.log("ID de laptop a actualizar:", id);
    const laptopActualizada = req.body;
    res.send(laptopActualizada);
});

app.delete("/laptops/:id", (req, res) => {
    const id = req.params.id;
    console.log("ID de laptop a eliminar:", id);
    res.send({id:id});
});

app.listen(puerto,()=>{
    console.log("SERVIDOR LISTO EN EL PUERTO "+3002);
}); 