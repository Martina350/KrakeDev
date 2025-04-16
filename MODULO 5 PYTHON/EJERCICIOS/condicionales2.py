import random

aleatorio=random.randint(1, 9)
aleatorio2=random.randint(1, 9)

if aleatorio == 4:
    print("GANASTE UN CHUPETE")
elif aleatorio == 8:
    print("GANASTE UN BALON")
elif aleatorio == 3 and aleatorio2 == 7:
    print ("GANASTE UNA TV")
else:
    print("PERDISTE!!")
