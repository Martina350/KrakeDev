import informacion  

cantidad = int(input("¿Cuántos pacientes quieres ingresar?: "))

for i in range(cantidad):
    paciente = input("Introduce el nombre completo y el año de nacimiento: ")
    informacion.agregar_nombre(paciente)
    informacion.agregar_edad(paciente)

print("Lista de nombres:", informacion.nombre_paciente)
print("Lista de edades:", informacion.edad)
informacion.mostrar_mayor_menor()
