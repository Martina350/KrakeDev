pais = input("INGRESE EL PAIS: ")
zona = input("INGRESE LA ZONA: ")
velocidad = int(input("INGRESAR VELOCIDAD: "))

if pais == "Ecuador":
    if zona == "Urbana":
        minimo, maximo = 10, 50
    elif zona == "Rural":
        minimo, maximo = 51, 70
    else:  
        minimo, maximo = 71, 90

elif pais == "Colombia":
    if zona == "Urbana":
        minimo, maximo = 10, 30
    elif zona == "Rural":
        minimo, maximo = 31, 80
    else:  
        minimo, maximo = 81, 100

else:  
    if zona == "Urbana":
        minimo, maximo = 10, 40
    elif zona == "Rural":
        minimo, maximo = 41, 60
    else:  
        minimo, maximo = 61, 120

if velocidad < minimo:
    print("VELOCIDAD MINIMA")
elif velocidad > maximo:
    print("EXCESO DE VELOCIDAD")
else:
    print("VELOCIDAD PERMITIDA")

