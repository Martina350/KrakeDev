import random
from laptop import Laptop

class Laptop_Business(Laptop):
    def __init__(self, marca, procesador, memoria, almacenamiento, duracion_bateria, costo=500, impuesto=10):
        super().__init__(marca, procesador, memoria, costo, impuesto)
        self.almacenamiento = almacenamiento
        self.duracion_bateria = duracion_bateria

    def realizarDiagnosticoSistema(self):
        diagnostico = super().realizarDiagnosticoSistema()
        diagnostico.update({
            "ALMACENAMIENTO": "OK" if self.almacenamiento >= 256 else "ESPACIO INSUFICIENTE",
            "DURACIÓN BATERÍA": "OK" if self.duracion_bateria >= 6 else "REEMPLAZAR BATERIA PRONTO"
        })
        return diagnostico

    def verificar_conectividad_red(self):
        conectividad = {
            "Wi-Fi Disponible": random.choice([True, False]),
            "Acceso a Servidores Empresariales": random.choice([True, False]),
            "Latencia Aceptable": random.choice([True, False])
        }
        return conectividad