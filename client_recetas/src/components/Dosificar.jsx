import { useEffect, useState } from "react";
import { getAllDosificar } from "../api/Dosificar.api";

export function Dosificar() {
  const [dosificaciones, setDosificaciones] = useState([]);

  useEffect(() => {
    async function loadDosificar() {
      const res = await getAllDosificar();
      setDosificaciones(res.data);
    }
    loadDosificar();
  }, []);

  return (
    <>
      {dosificaciones.map(dosificar => (
        <div key={dosificar.id_dosificar}>
          <h1>{dosificar.cantidad}</h1>
          <samp>{dosificar.numero_comensales}</samp>
        </div>
      ))}
    </>
  );
}
