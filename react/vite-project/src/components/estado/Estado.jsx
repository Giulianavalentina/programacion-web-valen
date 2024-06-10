//hooks -> useState
import { useEffect, useState } from "react";

//camelCase es la manera de escribir en la cual cada palabra nueva arranca con mayúscula
export const Estado = () => {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  };

  //el useEfect se va a actualizar la cantidad de veces que las dependencias se actualicen
  //si no le pasan dependencias se ejecutara solo al principio de la app en el primer render
  //si no le pasa el array de dependencia siempre se va a ejecutar
  useEffect(() => {
    console.log("el contador se ha actualizado");
  }, [contador]);

  const arrayPersonajes = [
    {
      name: "Rick",
      lastName: "Sanchez",
      planet: "Earth",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      name: "Morty",
      lastName: "Smith",
      planet: "Earth",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
  ];

  return (
    <>
      <div class="grilla">
        {
          //cuando despues de la funcion flecha hay parentesis significa que el return es implicito
          arrayPersonajes.map((personaje, index) => (
            <>
              <div class="caja">
                <h2>
                  {personaje.name} {personaje.lastName}
                </h2>
                <p>Planet {personaje.planet}</p>
                <img src={personaje.image} alt="description" />
              </div>
            </>
          ))
        }
      </div>
      <button onClick={handleClick}>aumentar</button>

      <p>{contador}</p>
    </>
  );
};
