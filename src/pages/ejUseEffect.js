import { useEffect, useState } from "react"

export default function EjercicioUseEffect() {
    const [lampara, setLampara] = useState("Apagada")

    useEffect(
        () => {
            console.log("Me ejecute")

            if (lampara == "Encendida") {
                alert("La lampara se encendió")
           }
            
        }, //Funcion flecha depende del array
        [lampara]  //Array de dependencia
    )

    function cambiarEstado() {
       if (lampara == "Encendida") {
            setLampara("Apagada")
       } else {
            setLampara("Encendida")
       }
    }

    return (<>
        <h1>EjercicioUseEffect</h1>
        <button onClick={cambiarEstado}>Cambiar estado de la lámpara</button>
        <p>La lampara está {lampara}</p>
    </>)
}