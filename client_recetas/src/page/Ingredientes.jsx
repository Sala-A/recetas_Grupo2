import { FormIngredientes } from "../components/FormIngredientes";
import { useNavigate, useParams } from "react-router-dom";

export const Ingredientes = () => {
  const navigate = useNavigate();
  const { id_receta } = useParams();
  return (
    <div>
      <div className="d-flex justify-content-end" style={{ margin: "2em" }}>
        <button
          type="button"
          className="btn btn-success btn-sm me-2"
          style={{
            backgroundColor: "#28a745",
            borderColor: "#28a745",
            fontWeight: "bold",
            width: "150px",
          }}
          onClick={() => navigate(`/Recetas/${id_receta}`)}
        >
          Atrás
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          style={{
            width: "150px",
            fontWeight: "bold",
            backgroundColor: "#FC4B08",
            borderColor: "#FC4B08",
          }}
          onClick={() => navigate(`/Pasos/${id_receta}`)}
        >
          Siguiente
        </button>
      </div>
      <FormIngredientes />
    </div>
  );
};
