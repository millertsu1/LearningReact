//! En react lo utilizamos generalmente para crear una lista de componentes a partir de un array de  datos

const Map = () => {
    const productos = [
        {
            id: 1,
            nombre: "Notebook",
            precio: 10
        },
        {
            id: 2,
            nombre: "Mouse",
            precio: 20
        },
        {
            id: 3,
            nombre: "TV",
            precio: 30
        },
        {
            id: 4,
            nombre: "Monitor",
            precio: 40
        },  
        {
            id: 5,
            nombre: "Teclado",
            precio: 50
        }
    ];

  return (
    <>
    <h2 className="text-3xl">Productos de computo con ID</h2>
    <ul>
        {productos.map(producto => (
            <li key={producto.id}>
                <strong>{producto.nombre} </strong><br/> 
                <span>El precio es: {producto.precio}</span>
            </li>
            
        ))}
    </ul>
    </>
  )
}

export default Map