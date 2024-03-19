//---------EJERCICIO 1-----------------------------------------------------------
/* let listNumber=[];

for (let i = 1; i<=50; i++) {
    const randomNumber=Math.round(Math.random()*10)+1;   
    listNumber.push(randomNumber);
}
console.log("Lista de numeros",listNumber);
console.log("cantidad de elementos ", listNumber.length)
//---------EJERCICIO 2-----------------------------------------------------------

let newArray=[];
for (let i = 0; i < listNumber.length; i++) {
    if(listNumber[i]<4){
        newArray.push(listNumber[i]);
    }    
}
console.log("Elementos del nuevo array ",newArray) */
//---------EJERCICIO 3-----------------------------------------------------
let myArray = ["Hola","mundo","como", "estas", "hoy", "wilson"];
let newMyArray=[];
for (let i = (myArray.length -1); i >= 0; i--) {
    newMyArray.push(myArray[i]);    
}
console.log(newMyArray);