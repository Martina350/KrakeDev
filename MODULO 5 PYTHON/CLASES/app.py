from laptopGamming import LaptopGamming
from laptopBusiness import Laptop_Business
import tkinter as tk
from tkinter import ttk
from PIL import Image, ImageTk
import random

class App:
    def __init__(self, root):
        self.root = root
        self.laptops = []
        self.imagenes = [
            "C:\\Users\\mcleo\\PROGRAMACION-MARTINA\\MODULO 5 PYTHON\\IMG\\1.jpg",
            "C:\\Users\\mcleo\\PROGRAMACION-MARTINA\\MODULO 5 PYTHON\\IMG\\2.jpg",
            "C:\\Users\\mcleo\\PROGRAMACION-MARTINA\\MODULO 5 PYTHON\\IMG\\3.jpg",
            "C:\\Users\\mcleo\\PROGRAMACION-MARTINA\\MODULO 5 PYTHON\\IMG\\3.png",
            "C:\\Users\\mcleo\\PROGRAMACION-MARTINA\\MODULO 5 PYTHON\\IMG\\4.jpg"
        ]

        root.title("CREADOR DE LAPTOPS")
        self.setup_ui()

    def setup_ui(self):

        ttk.Label(self.root, text="TIPO DE LAPTOP").grid(row=0, column=0)
        self.tipoLaptop = tk.StringVar(value="Gamming")
        tipos = ttk.Combobox(self.root, textvariable=self.tipoLaptop, values=["Gamming", "Business"])
        tipos.grid(row=0, column=1)


        ttk.Label(self.root, text="MARCA").grid(row=1, column=0)
        self.marca = tk.StringVar()
        ttk.Entry(self.root, textvariable=self.marca).grid(row=1, column=1)

        ttk.Label(self.root, text="PROCESADOR").grid(row=2, column=0)
        self.procesador = tk.StringVar()
        ttk.Entry(self.root, textvariable=self.procesador).grid(row=2, column=1)

        ttk.Label(self.root, text="MEMORIA").grid(row=3, column=0)
        self.memoria = tk.StringVar()
        ttk.Entry(self.root, textvariable=self.memoria).grid(row=3, column=1)

        ttk.Label(self.root, text="PRECIO").grid(row=4, column=0)
        self.precio = tk.StringVar()
        ttk.Entry(self.root, textvariable=self.precio).grid(row=4, column=1)

        ttk.Label(self.root, text="TARJETA GRAFICA").grid(row=5, column=0)
        self.tarjetaGrafica = tk.StringVar()
        ttk.Entry(self.root, textvariable=self.tarjetaGrafica).grid(row=5, column=1)

        ttk.Label(self.root, text="ALMACENAMIENTO").grid(row=6, column=0)
        self.almacenamiento = tk.StringVar()
        ttk.Entry(self.root, textvariable=self.almacenamiento).grid(row=6, column=1)

        ttk.Label(self.root, text="DURACION BATERIA").grid(row=7, column=0)
        self.duracion_bateria = tk.StringVar()
        ttk.Entry(self.root, textvariable=self.duracion_bateria).grid(row=7, column=1)

        ttk.Button(self.root, text="AGREGAR LAPTOP", command=self.agregarLaptop).grid(row=8, column=0, columnspan=2)

        self.mostrarLaptops = tk.Text(self.root, height=15, width=60)
        self.mostrarLaptops.grid(row=9, column=0, columnspan=3)

        self.canva = tk.Canvas(self.root, width=200, height=200)
        self.canva.grid(row=1, column=3, rowspan=8)

    def agregarLaptop(self):
        tipo = self.tipoLaptop.get()
        marca = self.marca.get()
        procesador = self.procesador.get()
        memoria = int(self.memoria.get())
        precio = float(self.precio.get())

        if tipo == "Gamming":
            tarjeta = self.tarjetaGrafica.get()
            nueva = LaptopGamming(marca, procesador, memoria, tarjeta, costo=precio)
        else:
            almacenamiento = int(self.almacenamiento.get())
            duracion = int(self.duracion_bateria.get())
            nueva = Laptop_Business(marca, procesador, memoria, almacenamiento, duracion, costo=precio)

        self.laptops.append(nueva)
        self.mostrarLaptops.insert(tk.END, f"{nueva.__class__.__name__} creada:\n")
        self.mostrarLaptops.insert(tk.END, f"{nueva.realizarInformeUso()}\n\n")

        self.mostrarImgRandom()

    def mostrarImgRandom(self):
        imagen_path = random.choice(self.imagenes)
        imagen = Image.open(imagen_path)
        imagen = imagen.resize((200, 200), Image.Resampling.LANCZOS)
        photo = ImageTk.PhotoImage(imagen)
        self.canva.create_image(0, 0, anchor=tk.NW, image=photo)
        self.canva.image = photo  

root = tk.Tk()
App(root)
root.mainloop()