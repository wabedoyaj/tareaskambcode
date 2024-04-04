//---------EJERCICIO 2---------------------------------------------------------
let shoppingList=[];
let quantyElement = Number(prompt("cantidad de elementos que quiere ingresar a la lista "));
for (let i = 0; i < quantyElement; i++) {
    let element=prompt("ingresar producto");
    if(shoppingList.includes(element)){
        alert("Error: Esta elementos ya esta en la lista de compras");
        i--;
    }else {
        shoppingList.push(element);       
    }
}
for (let i = 0; i <shoppingList.length; i++) {
    document.write("<li>",shoppingList[i],"</li>");    
}

