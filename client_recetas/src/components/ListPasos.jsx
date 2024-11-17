import { useEffect, useState } from "react";
import { getAllPasos } from "../api/Pasos.api";
import Pasos from "./CardPasos";
import { useParams } from "react-router-dom";

export function ListPasos() {
  const { id_receta } = useParams();
  const [pasos, setPasos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPasos() {
      try {
        const res = await getAllPasos();

        const filteredPasos = res.data.filter(
          paso => paso.id_receta === recetaId
        );
        setPasos(filteredPasos);
      } catch (err) {
        setError(err.message);
      }
    }
    loadPasos();
  }, [id_receta]);

  if (error) {
    return <p>Error cargando los pasos: {error}</p>;
  }

  return (
    <>
      {pasos.length === 0 ? (
        <p>No hay pasos para esta receta.</p>
      ) : (
        pasos.map(paso => <Pasos key={paso.id} paso={paso} />)
      )}
    </>
  );
}
