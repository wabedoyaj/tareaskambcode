document.write("<h1>TAREA 3</h1>");
/*----EJERCICIO 1*/
const base= Number(prompt("digitar la longitud de la base"));
const alto = Number(prompt("digitar la longitud del lado"));
if (base==alto){
    document.write("ES UN CUADRADO");
}else if(base>alto){
    document.write("ES UN RECTANGULO HORIZONTAL");
}else{
    document.write("ES UN RECTANGULO VERTICAL");
}
/*----------EJERCICIO 2------------------*/
const numberA = Number(prompt("Digitar numero 1"));
const numberB = Number(prompt("Digitar numero 2"));
const operator = prompt("Operacion que desea ejecutar (suma, rest1a, multiplicacion o division)").toLowerCase();
var result;
if (operator === "suma"){
    result=numberA+numberB;    
}else if (operator === "resta"){
    result=numberA-numberB;    
}else if (operator==="multiplicacion"){
    result=numberA*numberB;    
}else if (operator==="division"){
    if (numberB !==0) {
        result=numberA/numberB;        
    } else {
        result="No se puede realizar la operacion al dividir por cero";        
    }
}else{
    result="No selecciono la operacion a realizar";
}
document.write("<br> El resultado de la operacion es : " + result)
/*----------EJERCICIO 3------------------*/
const number1 = Number(prompt("Digitar numero 1"));
const number2 = Number(prompt("Digitar numero 2"));
var text;
if (number1===number2) {
    text= ("Los numeros son iguales");    
}else if(number1>number2){
    text=("Numero menor es: " + number2);    
}else{
    text= ("Numero menor es: " + number1);   
}
document.write("<br>"+ text)