// La variable puede ser redefinida (declarada)
// var Cantidad = 3

// Let puede ser llamada nuevamente pero no redifinida con ese comando
//let Color = rojo
//Color = amarillo 

// Permanentemente constante a su valor de origen
//const Cantidad = 4

const Precio = 7000;

Boton.addEventListener("click", function(){
    const cantidadInput = document.querySelector("#Cantidad").value;
    // console.log(Number(cantidadInput));
    let Total = document.querySelector("#Total");
    Total.innerHTML = Number(cantidadInput) * Number(Precio);
    // console.log(Total);
    let Q = document.querySelector("#Q");
    Q.innerHTML = Number(cantidadInput);
    let select = document.querySelector("select").value;
    // console.log(select);
    let Pelota = document.querySelector("#Pelota");
    if (select == "Rojo"){
        Pelota.style.backgroundColor = "red";
    } else if (select == "Negro"){
        Pelota.style.backgroundColor = "black"
    } else (Pelota.style.backgroundColor = "blue")
});



