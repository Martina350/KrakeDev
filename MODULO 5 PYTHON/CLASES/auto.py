class auto:
    def __init__(self, marca, modelo, anio, kilometraje=0):
        self.marca = marca
        self.modelo = modelo
        self.anio = anio
        self.kilometraje = kilometraje

    def mostrarInfo(self):
        print(f"MARCA: {self.marca}")
        print(f"MODELO: {self.modelo}")
        print(f"AÑO: {self.anio}")

    def actualizarKm(self, kilometraje):
        if kilometraje >= self.kilometraje:
            self.kilometraje = kilometraje
        else:
            print("No se puede reducir el kilometraje")

    def realizarViaje(self, kilometros):
        if kilometros > 0:
            self.kilometraje += kilometros
        else:
            print("La cantidad de kilómetros debe ser positiva.")

    def estadoAuto(self):
        if self.kilometraje < 20000:
            print("Estoy como nuevo")
        elif self.kilometraje <= 100000:
            print("Ya estoy usado")
        else:
            print("¡Ya déjame descansar por favor!")

miAuto = auto("CHEVROLET", "EQUINOX", 2026)
miAuto.mostrarInfo()
miAuto.realizarViaje(150000)
miAuto.actualizarKm(25)
miAuto.estadoAuto()
print(miAuto.__dict__)