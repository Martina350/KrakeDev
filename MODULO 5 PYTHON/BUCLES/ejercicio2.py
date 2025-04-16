frase = input("INGRESE UNA FRASE:")
letra = input("INGRESE UNA LETRA:")

contador = 0
for i in frase:
    if i == letra:
        contador +=1

print(f"LA LETRA {letra} SE REPITE {contador}")
print(frase.count(letra))