import { useEffect, useState } from "react";
import { getAllPasos } from "../api/Pasos.api";
import Pasos from "./Pasos";

export function ListPasos() {
  const [pasos, setPasos] = useState([]);

  useEffect(() => {
    async function loadPasos() {
        const res = await getAllPasos();
        setPasos(res.data);
    }
    loadPasos();
  }, []);

  return (
    <>
      {pasos.map(paso => (
        <Pasos key={paso.id_receta} paso={paso} />
      ))}
    </>
  );
}
