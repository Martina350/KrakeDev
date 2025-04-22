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

    @classmethod
    def toyota_actual(cls, modelo):
        anio_actual = 2025  # año actual escrito directamente
        return cls("TOYOTA", modelo, anio_actual, kilometraje=0)

    @staticmethod
    def comparar_kilometraje(auto1, auto2):
        return auto1.kilometraje == auto2.kilometraje

    @classmethod
    def nuevo_auto(cls, marca, modelo, anio, kilometraje):
        return cls(marca, modelo, anio, kilometraje)

    @staticmethod
    def estado_auto(auto):
        return auto.kilometraje > 200000