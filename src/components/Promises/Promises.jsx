const Promises = () => {
  console.log(`Tarea 1 `);
  console.log(`Tarea 2 `);

  //! programacion asincrona
  setTimeout(() => {
    console.log(`Tarea 3`);
  }, 2000);

  setTimeout(() => {
    console.log(`Tarea 4`);
  }, 1500);

  //! PROMESAS

  const tusFalsasPromesas = (state) => {
    return new Promise((resolve, reject) => {
      state ? resolve(` promesa cumplida`) : reject(`No se cumplio la promesa`);
    });
  };

  console.log(tusFalsasPromesas(false));

  //! THEN Y CATCH: son metodos para concatenar el resultado de una promesa
  //! El then es para cuando la promesa se cumple
  //! El catch es para cuando la promesa no se cumple

  tusFalsasPromesas(false)
    .then((respuesta) => console.log("si se cumple!!", respuesta))
    .catch((error) => console.log("Se produjo un error", error));

  //!Practicar con un array de datos

  const animals = ["cat", "dog", "bat", "lizard", "snake"];

  const callAnimals = (estado) => {
    return new Promise((resolve, reject) => {
      estado
        ? resolve(animals)
        : reject(`No estan disponibles los animales del zoologico`);
    });
  };

  callAnimals(true)
    .then((respuesta) => console.table(respuesta))
    .catch((error) => console.log("No se pudo mostrar los animales",error));

  return (
    <>
      <h1>Promesas</h1>
    </>
  );
};
export default Promises;
