import { useState, useEffect, useRef } from "react"

const Temporizador = () => {
    const [segundos, setSegundos] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSegundos(segundos => segundos + 1);
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        }
    }, []);

    //!Detenemos el temporizador
    const detenerTemporizador = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }
  return (
    <>
    <h2> Temporizador: {segundos}</h2>
    <button onClick={detenerTemporizador}>Detener</button>
    </>
  )
}

export default Temporizador