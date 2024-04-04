/* const calcPrecioTotal =(precioproducto, precioEnvio)=>{
    const total = precioproducto+precioEnvio;
    return total;
}
const precioTotal1 = calcPrecioTotal(1200,200);
console.log("EL PRECIO TOTAL DE PRODUCTO ES ", precioTotal1);

const precioTotal2 = calcPrecioTotal(3200,220);
console.log("EL PRECIO TOTAL DE PRODUCTO ES ", precioTotal2); */
let movie ={
    name:"matrix",
    releaseYear:1985,
    minimumAge:18,
    disponibleParaUsuario:(userAge)=>{
        if (userAge>=movie.minimumAge){
            console.log("Puede ver la pelicula");
        }else{
            console.log("¡NO!! Puede ver la pelicula");
        }
    },
}
console.log("Nombre pelicula",movie.name);
movie.disponibleParaUsuario(14);
movie.disponibleParaUsuario(18);