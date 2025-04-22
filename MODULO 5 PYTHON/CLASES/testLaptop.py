from laptop import Laptop

laptopCartman=Laptop("Lenovo","i7",32)
laptopKyle=Laptop("Lenovo","i7",32, 600)

for numero in range(1, 1001): 
    asusLaptop=Laptop.asus_laptop(numero)
    print(asusLaptop.__dict__)

#print(Laptop.comparar_costo(laptopCartman, laptopKyle))