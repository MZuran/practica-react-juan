import { Tarjeta } from "./components/componenteTarjeta.js"
import { useState, useEffect } from "react";

export const personas = [
  {
      nombre: "Juan",
      apellido: "Pérez",
      edad: 30,
      sexo: "Masculino"
  },
  {
      nombre: "María",
      apellido: "González",
      edad: 25,
      sexo: "Femenino"
  },
  {
      nombre: "Carlos",
      apellido: "Ramírez",
      edad: 40,
      sexo: "Masculino"
  },
  {
      nombre: "Laura",
      apellido: "Fernández",
      edad: 35,
      sexo: "Femenino"
  }
];

export default function Home() {
  const [arrayPersonas, setArrayPersonas] = useState([])

  useEffect(
    () => {

      const aux = personas.map(
        elemento => <Tarjeta nombre={elemento.nombre} edad={elemento.edad}/>
      )

      setArrayPersonas(aux)
    },
    [] //Array de dependencias
  )

  return (
    <>
      <h1>Titulo</h1>
      {arrayPersonas}
    </>
  );
}