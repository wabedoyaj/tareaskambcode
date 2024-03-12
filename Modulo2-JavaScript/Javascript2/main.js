//-------EJERCICIO 1 -------------------------------------------------------
const passwordUser = prompt("Ingrese contraseña");
const passwordCorrect = "wilson";
if (passwordUser === passwordCorrect) {
    document.write("<br>Inicio de sesion exitoso");    
} else {
    document.write("<br>Contraseña incorrecta");    
} 
//-------EJERCICIO 2 -------------------------------------------------------
const n1=  Number(prompt("Ingrese primer numero"));
const n2=  Number(prompt("Ingrese segundo numero"));

document.write("<br>Numero uno ingresado es: "+ n1);
document.write("<br>Numero dos ingresado es:" + n2);
if (n2>0) {
    const result=n1/n2;
    
    document.write("<br>El resultado de la division es: " + result.toFixed(1));
    
} else {
    document.write("<br>Error: el divisor no puede ser cero");
    
} 
//-------EJERCICIO 3 -------------------------------------------------------
const euroSymbol = '\u20AC';
const age = Number(prompt("Escribir edad para tributar"));
const income = Number(prompt("Ingresos mensuales"));
document.write("<br>El usuario tiene "+age+" años ");
document.write("y sus ingresos mensules son "+income+" "+euroSymbol);  
if (age>16 && income>=1000) {
    document.write("<h3>El usuario tiene que tributar </h3>");    
} else {
    document.write("<h3>El usuario NO tiene que tributar </h3>"); 
}
//-------EJERCICIO 4 -------------------------------------------------------
const age2 = Number(prompt("Ingrese la edad para entra a la sala")); 
document.write("<br>La edad del usuario para ingresar a la sala es:"+ age2);
if(age2<4){
    document.write("<br>Puedes entrar gratis");
}else if (age2>=4 && age2<=18) {
    document.write("<br>El usuario debe pagar 5 " + euroSymbol);
} else {
    document.write("<br>El usuario debe pagar 10 " + euroSymbol);
}