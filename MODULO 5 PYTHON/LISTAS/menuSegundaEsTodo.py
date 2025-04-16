menu=["ceviche", "encebollado", "pollo con papas", "coctel de camaron"]

print(f"SEGUNDA ES TODO OFRECE: {menu}")

print("\n1. Añadir plato")
print("2. Buscar plato")
print("3. Eliminar plato")
print("4. Mostrar platos")

opcion=input("Seleccione una opción: ")

if opcion=="1":
    menu.append(input("Plato a añadir: "))  
    print("Plato añadido", menu)

elif opcion=="2":
    print(menu.index(input("Plato a buscar: "))) 

elif opcion=="3":
    menu.remove(input("Plato a eliminar: "))  
    print("Plato eliminado",menu)

elif opcion=="4":
    print("\nPlatos en el menú:", menu)






