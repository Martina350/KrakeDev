#LISTAS
planetas=["Mercurio", "Venus", "Tierra", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno", 5, 40.5, True]
# #print(planetas[-3])
# print(planetas[2: ])
# print(len(planetas[2]))

#TRABAJAR CON UNA LISTA DE NUMEROS
gravedadPlanetas=[0.378, 0.907, 1, 0.377, 2.36, 0.916, 0.889, 1.12]
pesoBus=124054

print(f"EN LA TIERRA, UN AUTOBUS DE DOS PISOS PESA {pesoBus} N")
print(f"EN MERCURIO UN AUTOBUS DE 2 PISOS PESA {pesoBus*gravedadPlanetas[0]} N")

print(f"LO MAS LIVIANO QUE SERIA UN AUTOBUS EN EL SISTEMA SOLAR ES {pesoBus*min(gravedadPlanetas)} N")
print(f"LO MAS PESADO QUE SERIA UN AUTOBUS EN EL SISTEMA SOLAR ES {pesoBus*max(gravedadPlanetas)} N")
