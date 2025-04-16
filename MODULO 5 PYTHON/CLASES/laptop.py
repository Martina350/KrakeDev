class Laptop:
    def __init__(self, marca, procesador, memoria, costo=500, impuesto=10):
        self.marca=marca
        self.procesador=procesador
        self.memoria=memoria
        self.costo=costo
        self.impuesto=impuesto

    def valorFinal(self):
        return self.costo + self.impuesto
    def valorDescuento(self, descuento):
        return (self.costo*descuento)/100


laptopCartman=Laptop("Lenovo","i7",32)
print(laptopCartman.__dict__)
print(laptopCartman.valorFinal())
print(f"el valor del descuento es: {laptopCartman.valorDescuento(10)}")
