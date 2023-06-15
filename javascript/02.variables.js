/* Este paso se hace cuando el src de javascript esta en el head */

window.onload = function(){
    console.log("Hola Mundo")
}

// Variables Numericas 
// var + nombre de la variable
// Javascript es sensible a las minuscular y mayusculas.  
var numero_decimal = 5.3
console.log("numero_decimal", numero_decimal);

// Variables de texto (strings)
var palabra = "palabras";
console.log("palabra", palabra);

// Variables booleanas
var boleana = true; // no es necesario terminar las sentencias con ; pero es buena costumbre 
console.log("boleana", boleana);

// Variables de tipo arreglo (array): Son aquellas variables que me permiten almacenar mas de una informacion:
var colores = ["rojo", "amarillo", numero_decimal, palabra];
console.log("colores", colores);
console.log("colores", colores[2]);  // Esto es para que me muestre el objeto del indice 2. 

// Variables de tipo objeto: (object: propiedad y el valor del objeto) 
var jugo = {"ingrediente1":"fresa",
            "ingrediente2":"mandarina",
            "ingrediente3":"leche"}
console.log("jugo", jugo)
console.log("jugo", jugo.ingrediente1)

// Interactuando con el DOM = Modelos de objetos de documento



