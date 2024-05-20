//arrays

const ejemploArray = [1, 2, 3];
console.log(ejemploArray[1]);

//objetos

const persona = {
  //clave : valor
  name: "valentina",
  age: 17,
  isWorking: true,
  cats: [cielo, maki, kira],
  walk: function () {
    //si la funcion retorna void es que no devuelve nada, sino aclara el tipo de data
    return "estoy cansada";
  },
};

//opcional

//opcion 1
console.log(persona.name);
//opcion 2
console.log(persona["name"]);
console.log(persona.cats[1]);

//cuando estamos mostrando/ejecutando una funcion no se pone los parentesis esto no va a funcionar
console.log(persona.walk());

persona.age = 20;
console.log(persona.age);
//delete barra las prioridades seleccionadas del objeto
delete persona.age;
