import { useEffect, useState } from "react";
import { getAllPasos } from "../api/Pasos.api";
import Pasos from "./Pasos";
import { useParams } from "react-router-dom";

export function ListPasos() {
  const { id_receta } = useParams();
  const [pasos, setPasos] = useState([]);

  useEffect(() => {
    async function loadPasos() {

      const res = await getAllPasos();
      setPasos(res.data);
      
      const recetaId = parseInt(id_receta, 10);
      
      const filteredPasos = res.data.filter(
        Pasos => Pasos.id_receta === recetaId
      )

      setPasos(filteredPasos);
    }
    loadPasos();
  }, [id_receta]);

  return (
    <>
      {pasos.map(paso => (
        <Pasos key={paso.id_receta} paso={paso} />
      ))}
    </>
  );
}
