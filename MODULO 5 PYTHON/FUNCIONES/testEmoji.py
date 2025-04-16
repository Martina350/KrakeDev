import emoji

cantidad_frase=int(input("CUANTAS FRASES DESEA INGRESAR?: "))
for i in range(cantidad_frase):
    frase=input("INGRESA LA FRASE: ")
    emoji.encontrar_palabra(frase)
    emoji.agregar_frase(frase)
