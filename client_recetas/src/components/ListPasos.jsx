import { useEffect, useState } from "react";
import { getAllPasos } from "../api/Pasos.api";
import Pasos from "./CardPasos";
import { useParams } from "react-router-dom";

export function ListPasos() {
  const { id_receta } = useParams();
  const [pasos, setPasos] = useState([]);

  useEffect(() => {
    async function loadPasos() {
      const res = await getAllPasos();

      const recetaId = parseInt(id_receta, 10);

      const filteredPasos = res.data.filter(
        (paso) => paso.id_receta === recetaId
      );
      setPasos(filteredPasos);
    }
    loadPasos();
  }, [id_receta]);

  return (
    <>
      {pasos.length === 0 ? (
        <p>No hay pasos para esta receta.</p>
      ) : (
        pasos.map((paso) => <Pasos key={paso.id_pasos} paso={paso} />)
      )}
    </>
  );
}
