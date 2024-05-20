// 1) ¿Qué se imprimirá en la consola al ejecutar el siguiente código? y por que?
const person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "music", "sports"],
};
//desestructuracion
const { weight = 70, height = 180 } = person;
console.log(weight, height);

// R = Al ejecutar imprime 70 y 180 porque son arrays dentro de un objeto.

// 2) ¿Qué se imprimirá en la consola al ejecutar el siguiente código? Y por que?
const person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "music", "sports"],
};

const { age: personAge } = person;
console.log(age);
