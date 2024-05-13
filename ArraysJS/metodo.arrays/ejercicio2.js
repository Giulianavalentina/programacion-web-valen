//En un restaurante se reciben pedidos de comida a domicilio. Vamos a escribir una función procesarPedido que recibe un pedido, que es un array de platos. Lo que debemos hacer es:
//El primer elemento lo sacamos del array, ya que es el nombre del cliente.
//Añadimos al principio del array la cadena de texto "bebida", ya que es una promoción que tenemos.
//Después añadimos al final del array el nombre del usuario que sacamos antes.

const array = ["Valentina Cobeña", "hamburguesa", "papas"];

function procesarPedido(pedidos) {
    const cliente = pedidos.shift(); 
    pedidos.push(cliente);  
    const bebida = "Fanta"; 
    pedidos.unshift(bebida); 
    return(pedidos);
}

console.log(procesarPedido(array)); 