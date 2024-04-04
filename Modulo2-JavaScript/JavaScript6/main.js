/* //---------------EJERCICIO 1---------------------------------
document.write("<h2>EJERCICIO 1</h2>");  
const cantidadArticulos=Number(prompt("Ingrese numero de articulos"));
const arrayPrecioArticulo =[];
for (let i = 0; i < cantidadArticulos; i++) {
    let precioArticulo=Number(prompt("Ingrese el valor del articulo"));
    arrayPrecioArticulo.push(precioArticulo);
    document.write("<h3>El IVA del  producto ",i+1," es $",calcularIVA(precioArticulo),"</h3>");
}

function calcularIVA(price){
    const valorIVA = (price*19)/100;
    return valorIVA;
}
//----------------EJERCICIO 2--------------------------------------
document.write("<h2>EJERCICIO 2</h2>");  
const discount=Number(prompt("Ingrese el descuento para los articulos "));
for (let i = 0; i < arrayPrecioArticulo.length; i++) {
    let precio = arrayPrecioArticulo[i];
    document.write("<h3>El valor del articulo ",i+1 ," con descuento es $",discountItem(precio,discount),"</h3>");
}
function discountItem(price, discountItem){
    const valorDiscount = (price -(price*discountItem)/100);
    return valorDiscount;
}
document.write("<h2>VALOR DE LOS PRODUCTOS DIGITADOS POR EL USUARIO </h2>");
for (let i = 0; i < arrayPrecioArticulo.length; i++) {
    document.write("<h3>El valor del articulos ",i+1," es $",arrayPrecioArticulo[i],"</h3>");
} */
//----------------EJERCICIO 3-------------------------------------------------
document.write("<h2>EJERCICIO 3</h2>");
const cantidadnumeros=Number(prompt("Ingrese cantidad de numeros que desea ingresar al array "));
const arrayNumeros =[];
function sumaNumerosArray(numberArray){
    // const longitud= numberArray.length;
    let sum =0;
     for (let i = 0; i < numberArray.length; i++) {
         sum = numberArray[i]+sum;        
     }
     return sum;
} 
for (let i = 0; i < cantidadnumeros; i++) {
    const valorNumero=Number(prompt("Ingrese numero "));
    arrayNumeros.push(valorNumero);    
}
let totalSuma = sumaNumerosArray(arrayNumeros);
document.write("numeros dentro del array guardados [",arrayNumeros,"]")
document.write("<br>la suma de los elementos del array es: ",totalSuma);

//----------------EJERCICIO 4-------------------------------------------------
document.write("<h2>EJERCICIO 4</h2>");
function calculoPromedio(totalSumaNumeros, cantidadnumeros){
    let promediosuma =Math.round((totalSumaNumeros/cantidadnumeros)*100)/100;
    return promediosuma;
}
document.write("el promedio de la suma de numeros del array es: ",calculoPromedio(totalSuma, cantidadnumeros));
