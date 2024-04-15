import { useRef } from "react"
import toast, { Toaster } from 'react-hot-toast';

const UseRef = () => {
    const productosComprados = useRef(0);

    const comprarProducto = () => {
        productosComprados.current = productosComprados.current +1;
        toast(`Agregaste ${productosComprados.current} productos al carrito 🛒`);
    }

  return (
    <>
    <h2>Productos Marolio comprados: {productosComprados.current}</h2>
    <button onClick={comprarProducto} className="bg-blue-500 p-2 rounded-full">Comprar</button>
    <Toaster position="top-center" reverseOrder={false} />
    </>
  ) 
}

export default UseRef