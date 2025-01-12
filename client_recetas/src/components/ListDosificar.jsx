import { useEffect, useState } from "react";
import { getAllDosificar } from "../api/Dosificar.api";

export function Dosificar() {
  const [dosificaciones, setDosificaciones] = useState([]);
  const [numComensales, setNumComensales] = useState(1); // Estado para manejar el número de comensales

  useEffect(() => {
    async function loadDosificar() {
      const res = await getAllDosificar();
      setDosificaciones(res.data);
    }
    loadDosificar();
  }, []);

  // Función para recalcular la cantidad de ingredientes en función del número de comensales
  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value >= 1 && value <= 100) {
      setNumComensales(value);
    }
  };

  return (
    <>
      <div style={{ marginBottom: "1rem", textAlign: "center" }}>
        <h3>Número de Comensales</h3>
        <input
          type="number"
          value={numComensales}
          onChange={handleInputChange}
          min="1"
          max="100"
          style={{
            padding: "0.5rem",
            width: "6rem",
            textAlign: "center",
            borderRadius: "4px",
            border: "1px solid #F1A94B",
          }}
        />
      </div>

      {dosificaciones.map(dosificar => (
        <div key={dosificar.id_dosificar}>
          <h1>{dosificar.cantidad * numComensales}</h1> {/* Recalcula la cantidad según el número de comensales */}
          <samp>{dosificar.numero_comensales}</samp>
        </div>
      ))}
    </>
  );
}
