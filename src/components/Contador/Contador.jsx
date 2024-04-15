import { useState, useEffect } from "react";

const Contador = ({ stock, inicial }) => {
  const [contador, setContador] = useState(inicial);
  const [color, setColor] = useState('black');

  //*aqui trabajamos con el HOOK useEffect
   useEffect(() => {
    //! aqui cambiamos el titulo de la pestana del navegador
    document.title = `Contador: ${contador}`;

    if (contador >= 5){
        setColor('red')
    }else{
        setColor('black')
    }
  }, [contador]);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  const addCart =()=>{
    console.log(`agregaste ${contador} items al carrito`)
  }

  return (
    <>
      <h2 className="bold text-4xl">Contador</h2>
     
      <button onClick={incrementar}>+</button>
      <strong style={{color:color}}>{contador}</strong>
      <button onClick={decrementar}>-</button>

      <button className="bg-blue-500 p-2 rounded-full" onClick={addCart} style={{color:color, border: color}}>Agregar al carrito</button>
    </>
  );
};

export default Contador;
