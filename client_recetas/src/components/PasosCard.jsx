import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";  
import { createPaso } from "../api/Pasos.api";

export function PasosCard() {
  const navigate = useNavigate();
  const { id_receta } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = handleSubmit(async (data) => {
    try {
      const dataWithId = { ...data, id_receta };
      const res = await createPaso(dataWithId);
      console.log("Paso creado:", res.data);
      navigate(`/DetallesReceta/${id_receta}`);
    } catch (error) {
      console.error("Error al crear paso:", error);
    }
  });

  return (
    <div className="container mt-5">
      <form
        onSubmit={onsubmit}
        className="p-4 border rounded shadow-sm"
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          marginBottom: "5rem",
        }}
      >
        <h3 className="text-center text-dark mb-4">Agregar Paso</h3>
        <div className="mb-3">
          <textarea
            placeholder="Descripción del paso"
            className="form-control"
            rows="3"
            style={{
              borderColor: "#4CBD49",
              backgroundColor: "#fff",
            }}
            {...register("descripcion", { required: "La descripción es obligatoria" })}
          ></textarea>
          {errors.descripcion && (
            <span className="text-danger">{errors.descripcion.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="btn w-100"
          style={{
            backgroundColor: "#FC4B08",
            color: "#fff",
            borderColor: "#FC4B08",
          }}
        >
          Guardar
        </button>
      </form>
    </div>
  );
}
