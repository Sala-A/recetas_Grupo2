import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CardDosificar({ Dosificar }) {
  const [numComensales, setNumComensales] = useState(1); // Valor inicial por defecto
  const navigate = useNavigate();

  // Limitar el valor del número de comensales entre 1 y 100
  const handleInputChange = (event) => {
    let value = event.target.value;
    if (value > 100) {
      value = 100;
    } else if (value < 1) {
      value = 1;
    }
    setNumComensales(value);
  };

  // Función para manejar el cambio cuando se presionan los botones
  const incrementComensales = () => {
    if (numComensales < 100) {
      setNumComensales((prev) => prev + 1);
    }
  };

  const decrementComensales = () => {
    if (numComensales > 1) {
      setNumComensales((prev) => prev - 1);
    }
  };

  return (
    <div className="container">
      <div
        className="steps-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
          gap: "1rem",
          justifyContent: "center",
          marginTop: "1.5rem",
          marginBottom: "1rem",
        }}
      >
        <div
          className="step-card"
          style={{
            border: "solid 1px #F1A94B",
            boxShadow: "0 4px 6px 0 rgba(241, 169, 75, 0.3)",
            borderRadius: "8px",
            padding: "1rem",
            backgroundColor: "#FFF6E0",
          }}
        >
          <div className="card-body">
            <h3
              style={{
                color: "#FC4B08",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              Número de Comensales
            </h3>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <button
                onClick={decrementComensales}
                style={{
                  background: "#F1A94B",
                  border: "none",
                  color: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                }}
              >
                -
              </button>

              <input
                type="number"
                value={numComensales}
                onChange={handleInputChange}
                placeholder="Ingrese el número"
                style={{
                  width: "5rem",
                  padding: "0.5rem",
                  border: "1px solid #F1A94B",
                  borderRadius: "4px",
                  textAlign: "center",
                }}
                min="1"
                max="100"
              />

              <button
                onClick={incrementComensales}
                style={{
                  background: "#F1A94B",
                  border: "none",
                  color: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
