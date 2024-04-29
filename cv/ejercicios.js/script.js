// declarar funciones

// funcion tradicional

/*
function myFuction(){
    return
}
*/

// fuction flecha o arrow function
/*
const myFuction = () =>{
    
}*/

let contador = 0;

// dato importante => siempre los nombres de las funciones siguen la nomeclatura camelCase

function incrementarNumero() {
  //  let number = document.getElementById("number").textContent
  contador = contador + 1;
  document.getElementById("Numero").textContent = contador;
}
