//---------------ejercicio 1--------------------------
console.log("---------------ejercicio 1--------------------------");
let serie ={
    title:"The Walking Dead",
    numberOfSeasons:13,
    gender:"Horror",
    creator:"Robert Kirkman",
    releaseYear:2010,    
}
console.log("Nombre serie",serie.title);
console.log("La serie tiene ",serie.numberOfSeasons);
console.log("El creador de la serie es",serie.creator);
console.log("la serie fue lanzada en el año ",serie.releaseYear,"y su genero es de ",serie.gender);

//---------------ejercicio 2--------------------------
console.log("---------------ejercicio 2--------------------------");
let person ={
    name:"Wilson Alexis Bedoya",
    age:38,
    weight:"80",
    height:"180",
    calcularIMC:(peso, altura)=>{
        let imc;
        let alturaMetros=altura/100;
        imc = peso/(alturaMetros**2);
        return imc;
    },
    esMayorEdad:(edad)=>{
        let result;
        if (edad>=18) {
            result=true;            
        } else {
            result=false;
            
        }
        return result;
    }
}
console.log("la persona tiene un IMC de: ",person.calcularIMC(80,180));
console.log("Nombre: ",person.name);
console.log("la persona es mayor de edad: ",person.esMayorEdad(14));
console.log("la persona es mayor de edad: ",person.esMayorEdad(25));
//---------------ejercicio 3--------------------------
console.log("---------------ejercicio 3--------------------------");
let book={
    name:"Cien años de soledad",
    publicationDate: "05/Mayo/1967",
    price: 70000,
    autores:["Gabriel Garcia Marquez","Jose Eustacio Rivera","Rafael Pombo"],
    numberPages:496,
    category:"only_adults",
    isAvailableForUser:(userAge)=>{
        if (book.category === "only_adults") {
            if(userAge>=18){
                return("El libro esta disponible para el usuario"); 
            }else{
                return("El libro NO esta disponible para el usuario por ser menor de edad ");
            }                       
        } else {
            return("Cualquier pérsona puede leer el libro");         
        }
    },
    getTotalPrice:()=>{
        let totalPrice;
        totalPrice= book.price+(book.price*0.19);
        return totalPrice;

    }  
}
console.log(book.isAvailableForUser(14));
console.log(book.isAvailableForUser(18));
//---------------ejercicio 4--------------------------
console.log("---------------ejercicio 4--------------------------");
console.log("precio del libro con IVA es ", book.getTotalPrice());