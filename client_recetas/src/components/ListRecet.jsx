import { useEffect, useState } from "react";
import { getAllRecetas } from "../api/Recetas.api";

export function ListRecet() {
  const [recetas, setRectas] = useState([]);
  useEffect(() => {
    async function loadRecetas() {
      const res = await getAllRecetas();
      console.log(res)
      setRectas(res.data);
    }
    loadRecetas();
  }, []);

  return (
    <>
        {recetas.map(receta => (
            <div key={receta.id_receta}>
            <img src={receta.imagen} alt="" width={200}/>
                <h1>{receta.nombre}</h1>
                <p>{receta.descripcion}</p>
                <span>{receta.tiempo_preparacion}</span>
                <span>{receta.numero_comensales}</span>
            </div>
        ))}
    </>
  )
}
