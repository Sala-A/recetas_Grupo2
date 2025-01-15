import { useEffect, useState } from "react";
import { getAllRecetas } from "../api/Recetas.api";
import Cards from "./CardReceta";

export function ListReceta() {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    async function loadRecetas() {
      const res = await getAllRecetas();
      setRecetas(res.data);
    }
    loadRecetas();
  }, []);

  return (
    <>
      {recetas.map((receta) => (
        <Cards key={receta.id_receta} receta={receta} />
      ))}
    </>
  );
}
