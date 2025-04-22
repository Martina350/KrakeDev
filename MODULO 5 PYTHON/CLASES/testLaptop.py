from laptop import Laptop
from laptopGamming import LaptopGamming
from laptopBusiness import Laptop_Business

laptopCartman=Laptop("Lenovo","i7",32)
laptopKyle=Laptop("Lenovo","i7",32, 600)
laptopKenny=Laptop("MSI","i7", 4, "RTX 8GB")

#for numero in range(1, 5): 
    #asusLaptop=Laptop.asus_laptop(numero)
    #print(asusLaptop.__dict__)

#print(Laptop.comparar_costo(laptopCartman, laptopKyle))

laptopOficina = Laptop_Business("Dell", "i5", 16, almacenamiento=512, duracion_bateria=8)

diagnostico = laptopOficina.realizarDiagnosticoSistema()
print("DIAGNÓSTICO DEL SISTEMA EMPRESARIAL:")
for clave, valor in diagnostico.items():
    print(f"{clave}: {valor}")

conectividad = laptopOficina.verificar_conectividad_red()
print("\nVERIFICACIÓN DE CONECTIVIDAD DE RED:")
for prueba, resultado in conectividad.items():
    print(f"{prueba}: {'OK' if resultado else 'NO'}")

print(laptopKenny.realizarDiagnosticoSistema())