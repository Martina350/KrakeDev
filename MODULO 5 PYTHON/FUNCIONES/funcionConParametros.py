def datos(nombre, apellido, edad, mensaje="HOLA"):
    if edad<18:
        print(f"{mensaje}, {nombre} {apellido} ES MENOR DE EDAD")
    else:
        print(f"{mensaje}, {nombre} {apellido} ES MAYOR DE EDAD")