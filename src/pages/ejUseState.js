import { useState } from "react"

//Contador
export default function EjercicioUseState() {
    const [numContador, setNumContador] = useState(0)
    let contadorNuevo = 0
    /*
    const [ Variable de Estado, Funcion para cambiar el valor del estado ] = useState( valor de estado inicial )

    La función setter (que es el segundo elemento del array) recibe como parámetro el nuevo estado
    No devuelve nada
    setNumContador(100)
    */

    const estiloBotones = {
        margin: "1vh",
        padding: "1vh"
    }

    function sumarUno() {
        setNumContador(numContador + 1)
        contadorNuevo = contadorNuevo + 1
    }

    function restarUno() {
        setNumContador(numContador - 1)
        contadorNuevo = contadorNuevo - 1
    }
    
    return(<>
    <h1>UseState</h1>
    <p>El valor del contador es {numContador}</p>
    <p>El valor del contador trucho es {contadorNuevo}</p>
    <button style={estiloBotones} onClick={sumarUno}>+1</button>
    <button style={estiloBotones} onClick={restarUno}>-1</button>
    </>)
}