
const list = document.getElementById("elementList");
const alerta = document.getElementById("alert");
const addProcuctList=()=>{
    const productName = document.getElementById("inputProduct");
    let product = productName.value;
    if (product === "") {
        alerta.innerHTML = "¡¡¡¡¡Campo vacio!!!!!";
              
    } else {
        list.innerHTML += "<li>"+product+"</li>";
        alerta.innerHTML="";  
    }
    
    productName.value="";
}
const cleanList=()=>{
    list.innerHTML= "";
    alerta.innerHTML=""; 
}