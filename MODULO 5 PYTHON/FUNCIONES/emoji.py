def encontrar_palabra(frase):
    if "feliz" in frase:
        print(f"EL EMOJI QUE TE REPRESENTA ES: \U0001F600")
    elif "triste" in frase:
        print(f"EL EMOJI QUE TE REPRESENTA ES: \U0001F972")

lista=[]
def agregar_frase(frase):
    lista.append(frase)
    print(f"LA FRASE FUE GUARDADA CORRECTAMETE {lista}")