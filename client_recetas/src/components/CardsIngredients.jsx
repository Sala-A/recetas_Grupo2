import { useNavigate } from "react-router-dom";

export default function CardsIgredients({ ingrediente }) {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div
        className="ingredientes-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(10rem))",
          justifyContent: "center",
          marginTop: "1.5rem",
          marginBottom: "1rem",
        }}
      >
        <div
          className="card"
          style={{
            border: "solid 1px #4CBD49",
            boxShadow: "0 2px 4px 0 rgba(76, 189, 73, 0.5)",
            width: "10rem",
          }}
        >
          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: "#8C8C8C", fontWeight: "bold" }}
            >
              {ingrediente.nombre}
            </h5>
            <p className="card-text">
              <strong>Cantidad:</strong> <span style={{ fontSize: "1.25rem" }}>{ingrediente.cantidad}</span> <strong style={{ textTransform: "uppercase" }}>{ingrediente.unidad}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}