import { TarjetaParcial } from "./componenteParcial.js";
import { useEffect, useState } from "react";

export default function ComponentePagina() {
    const [arrayPersonajes, setArrayPersonajes] = useState([])
    const [arrayTarjetas , setArrayTarjetas] = useState([])

    const url = "https://rickandmortyapi.com/api/character?count=10"

    function fetchCharactersPromise(url) {
        //console.log("Fecheando con Promesas");        //  Este console.log no es necesario, se puede borrar.
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                //Acá debemos meter nuestro código para manejar personajes
                //console.log(data.results)
                setArrayPersonajes(data.results)
            })
    }

    // Este useEffect sólo corre al principio 1 vez
    useEffect(
        () => {
            fetchCharactersPromise(url)
        },
        [] // Array de dependencias
    )

    // Este use effect está vigilando el arraypersonajes
    // Corre cada vez que detecta un cambio en arraypersonajes
    useEffect(
        () => {
            console.log("Se ejecuto el segundo useEffect", arrayPersonajes)

            const aux = arrayPersonajes.map(
                elemento => <TarjetaParcial nombre={elemento.name} especie={elemento.species} imagen={elemento.image} />
            )

            setArrayTarjetas(aux)

        }, // Cada vez que se detecta un cambio en el array de dependencias, se ejecuta la funcion flecha
        [arrayPersonajes] // Array de dependencias (DETECTA CAMBIOS EN SUS ELEMENTOS)
    )

    return (<>
        {arrayTarjetas}
    </>)
}