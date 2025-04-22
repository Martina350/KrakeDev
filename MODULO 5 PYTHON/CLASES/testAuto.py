from auto import auto

miAuto = auto("CHEVROLET", "EQUINOX", 2026)
miAuto.mostrarInfo()
miAuto.realizarViaje(150000)
miAuto.actualizarKm(25)
miAuto.estadoAuto()
print(miAuto.__dict__)

toyota = auto.toyota_actual("Corolla")
toyota.mostrarInfo()
print(toyota.__dict__)

auto2 = auto("FORD", "Focus", 2022, 150000)
print("¿Tienen el mismo kilometraje?", auto.comparar_kilometraje(miAuto, auto2))

usado = auto.nuevo_auto("NISSAN", "Versa", 2015, 80000)
print(usado.__dict__)

print("Mi auto esta usado?", auto.estado_auto(miAuto))
print("Toyota esta usado?", auto.estado_auto(toyota))