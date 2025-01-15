import { useNavigate } from "react-router-dom";

export default function CardPasos({ paso }) {
  const navigate = useNavigate();
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
            <h5
              className="card-title"
              style={{
                color: "#F1A94B",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            ></h5>
            <p className="card-text" style={{ fontSize: "1rem" }}>
              {paso.descripcion}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
