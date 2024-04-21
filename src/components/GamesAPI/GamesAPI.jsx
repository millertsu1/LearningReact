import { useEffect, useState } from "react";

const GamesAPI = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      <div className="flex justify-between flex-wrap w-3/4 m-auto">
        {productos.map((producto) => (
          <div
            className="w-[300px] p-5 m-2 bg-[#e0e0e0] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] rounded-[20px] relative"
            key={producto.id}
          >
            <span className="bg-orange-600 px-2 rounded-[5px] absolute">
              {producto.category}
            </span>
            <img
              className=" rounded-lg w-https://nutracademia.com/ h-48 mx-auto"
              src={producto.image}
              alt={producto.title}
            />
            <h2 className="text-3xl ">{producto.title}</h2>
            <hr className="my-2 border-solid border-black" />
            <p className="text-xl">${producto.price}</p>
            <button className="flex h-[35px] bg-slate-400 border-cyan-300 rounded-[5px] py-0 px-5">
              <svg className="w-full h-full fill-slate-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
                <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesAPI;
