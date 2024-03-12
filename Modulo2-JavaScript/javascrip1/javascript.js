var username=prompt("Ingrese el nombre");
var height=prompt("Altura en centimetros");
var weight = prompt("Peso en kilogramos");
var imc;
imc=(weight/((height/100))**2);
document.write("Hola ", username , " tu indice de masa corporal es ", imc.toFixed(2), " Kg/m2");
