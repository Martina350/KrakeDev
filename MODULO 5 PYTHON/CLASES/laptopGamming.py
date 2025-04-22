from laptop import Laptop

class LaptopGamming (Laptop):
    def __init__(self, marca, procesador, memoria, tarjGrafica, costo=500, impuesto=10):
        super().__init__(marca, procesador, memoria, costo, impuesto)
        self.tarjGrafica=tarjGrafica

    def realizarDiagnosticoSistema(self):
        resultadoDiagnostico=super().realizarDiagnosticoSistema()
        resultadoJuegos=self.realizarDiagnosticoJuegos()
        resultadoDiagnostico["RESULTADO JUEGOS"]=resultadoJuegos
        return resultadoDiagnostico
    
    def realizarDiagnosticoJuegos(self):
        juegos=["MINECRAFT","COD","GTA"]
        resultados={}
        for juego in juegos:
            fpsBase=30
            if "RTX" in self.tarjGrafica:
                fps=fpsBase*3
            elif"GTX" in self.tarjGrafica:
                fps=fpsBase*2
            else:
                fps=fpsBase
            
            resultados[juego]=f"{fps} FPS"
        return resultados
    pass
