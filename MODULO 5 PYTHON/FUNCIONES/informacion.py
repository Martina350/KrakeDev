nombre_paciente = []
edad = []

def agregar_nombre(informacion):
    nombre = " ".join(informacion.split()[:-1])
    nombre_paciente.append(nombre)

def agregar_edad(informacion):
    año_nacimiento = int(informacion.split()[-1]) 
    edad_actual = 2024 - año_nacimiento 
    edad.append(edad_actual)

    if edad_actual < 18:
        print(f"{nombre_paciente[-1]} es menor de edad.")
    else:
        print(f"{nombre_paciente[-1]} es mayor de edad.")

def mostrar_mayor_menor():
    if len(edad) == 0:
        print("No hay pacientes ingresados.")
        return

    mayor = edad[0]
    menor = edad[0]
    paciente_mayor = nombre_paciente[0]
    paciente_menor = nombre_paciente[0]

    for i in range(1, len(edad)):
        if edad[i] > mayor:
            mayor = edad[i]
            paciente_mayor = nombre_paciente[i]
        elif edad[i] < menor:
            menor = edad[i]
            paciente_menor = nombre_paciente[i]

    print(f"Paciente mayor: {paciente_mayor} con {mayor} años")
    print(f"Paciente menor: {paciente_menor} con {menor} años")