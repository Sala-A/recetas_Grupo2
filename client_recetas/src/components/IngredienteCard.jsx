import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createIngredientes } from "../api/Ingredientes.api";

export function IngredienteCard() {
  const navigate = useNavigate();
  const { id_receta } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onsubmit = handleSubmit(async (data) => {
    try {
      const dataWithId = { ...data, id_receta };
      const res = await createIngredientes(dataWithId);
      console.log(res);

      reset();
    } catch (error) {
      console.error("Error al crear ingrediente:", error);
    }
  });


  const botones = {
    width: "250px",
    color: "#fff",
    fontSize: "1.4rem",
    textAlign: "center",
  };


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
        <h3 className="text-center text-dark mb-4">Agregar Ingrediente</h3>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Nombre"
            className="form-control"
            style={{
              borderColor: "#4CBD49",
              backgroundColor: "#fff",
            }}
            {...register("nombre", { required: "El nombre es obligatorio" })}
          />
          {errors.nombre && (
            <span className="text-danger">{errors.nombre.message}</span>
          )}
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Cantidad"
            className="form-control"
            style={{
              borderColor: "#4CBD49",
              backgroundColor: "#fff",
            }}
            {...register("cantidad", {
              required: "La cantidad es obligatoria",
              pattern: {
                value: /^[0-9]+([.][0-9]+)?$/,
                message: "Por favor ingrese una cantidad válida",
              },
            })}
          />
          {errors.cantidad && (
            <span className="text-danger">{errors.cantidad.message}</span>
          )}
        </div>

        <div className="mb-3">
          <select
            className="form-select"
            style={{
              borderColor: "#4CBD49",
              backgroundColor: "#fff",
            }}
            {...register("unidad", { required: "La unidad es obligatoria" })}
          >
            <option value="">Selecciona una unidad</option>
            <option value="g">Gramos</option>
            <option value="lb">Libras</option>
            <option value="kg">Kilogramos</option>
            <option value="ml">Mililitros</option>
            <option value="l">Litros</option>
            <option value="tsp">Cucharadita</option>
            <option value="tbsp">Cucharada</option>
            <option value="cup">Taza</option>
          </select>
          {errors.unidad && (
            <span className="text-danger">{errors.unidad.message}</span>
          )}
        </div>


        <div className="d-flex justify-content-between">
          <button
            type="submit"
            className="btn btn-primary flex-fill me-2"
            style={{
              backgroundColor: "#FC4B08",
              borderColor: "#FC4B08",
            }}
          >
            Agregar Ingrediente
          </button>

          <button
            type="button"
            className="btn btn-primary flex-fill"
            style={{
              backgroundColor: "#FC4B08",
              borderColor: "#FC4B08",
            }}
            onClick={() => navigate(`/Pasos/${id_receta}`)}
          >
            Siguiente
          </button>
        </div>



      </form>
    </div>
  );
}
