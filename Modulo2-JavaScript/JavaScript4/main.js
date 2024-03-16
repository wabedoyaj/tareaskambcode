//--------Ejercicio 1--------------------------------------------------------
document.write("<h3>Ejercicio 1</h3>");
const age = Number(prompt("Ingresar edad del usuario"));
for (var i = 1; i<= age; i++) {
    document.write("Ha cumplido " + i + " año <br>");      
}
//--------Ejercicio 2------------------------------------------------------
document.write("<h3>Ejercicio 2</h3>");
const investment = Number(prompt("Cantidad a invertir"));
const month = Number(prompt("Numero de meses"));
var total=0;
for (var i = 1; i<= month; i++) {
    total+=investment;   
    document.write("Mes " + i + ": $ " +total +"<br>");       
}
document.write("Fin, Total ahorrado $ "+total );
//--------Ejercicio 3------------------------------------------------------
document.write("<h3>Ejercicio 3</h3>");
for (var i = 1; i<= 10; i++) {
    document.write("Tabla de multiplicar del "+i+"<br>");
    for (var  j = 1; j <=10 ; j++) {
        var result = i*j;
        document.write(i + " x " + j + " = " + result+"<br>");       
    }
}


 