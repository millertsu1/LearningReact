import {useState, useEffect } from 'react';


const Categorias = () => {
    const [categoria, setCategoria] = useState("");

    useEffect(() => {
        document.title = `categoria: ${categoria}`;
    }, [categoria]);

    const handleClick = (categoria) => {
        setCategoria(categoria);
    }
  return (
    <>
    <h2>Categoria de Productos</h2>
    <button className="bg-blue-500 p-2 m-3 rounded-full" onClick={()=> handleClick("Frutas")}> Frutas </button>
    <button className="bg-blue-500 p-2 m-3 rounded-full" onClick={()=> handleClick("Carnes")}> Carnes </button>
    <button className="bg-blue-500 p-2 m-3 rounded-full" onClick={()=> handleClick("Lacteos")}> Lacteos </button>
    <button className="bg-blue-500 p-2 m-3 rounded-full" onClick={()=> handleClick("Limpieza")}> Limpieza </button>
    </>
  )
}

export default Categorias