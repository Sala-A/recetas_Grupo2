import { useParams } from "react-router-dom";
import { ListIngredients } from "../components/ListIngredients";
import { ListPasos } from "../components/ListPasos";
import { useState } from "react";

export function DetallesReceta() {
  const { id_receta } = useParams();
  const [numComensales, setNumComensales] = useState(1);

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 1 && value <= 100) {
      setNumComensales(value);
    } else if (event.target.value === "") {
      setNumComensales("");
    }
  };

  return (
    <div className="container">
      <h1 className="mb-4 text-center" style={{ color: "#FC4B08" }}>
        Detalles De La Receta
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-start", 
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#FFF6E0",
            border: "1px solid #F1A94B",
            borderRadius: "4px",
            padding: "0.5rem",
            boxShadow: "0 4px 6px rgba(241, 169, 75, 0.3)",
            width: "fit-content",
          }}
        >
          <p
            style={{
              color: "#FC4B08",
              textAlign: "center",
              marginBottom: "0.5rem",
              fontWeight: "bold",
            }}
          >
            Número de Comensales
          </p>
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
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-2">
        
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-2">
          <ListIngredients id_receta={id_receta} numComensales={numComensales || 1} />
        </div>

        <div>
          <ListPasos id_receta={id_receta} />
        </div>
      </div>
    </div>
  );
}
