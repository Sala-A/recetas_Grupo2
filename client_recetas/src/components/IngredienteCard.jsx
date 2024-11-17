import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { createIngredientes, getIngredientes } from "../api/Ingredientes.api";
import { useState, useEffect } from "react";

export function IngredienteCard() {
  const { id_receta } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [ingredientesExistentes, setIngredientesExistentes] = useState([]);

  useEffect(() => {
    const fetchIngredientes = async () => {
      try {
        const res = await getIngredientes(id_receta);
        setIngredientesExistentes(res.data);
      } catch (error) {
        console.error("Error al cargar ingredientes:", error);
      }
    };
    fetchIngredientes();
  }, [id_receta]);

  const onsubmit = handleSubmit(async (data) => {
    const ingredienteDuplicado = ingredientesExistentes.some(
      (ingrediente) =>
        ingrediente.nombre.toLowerCase() === data.nombre.toLowerCase()
    );

    if (ingredienteDuplicado) {
      setErrorMessage("Ya existe un ingrediente con este nombre.");
      return;
    }

    try {
      const dataWithId = { ...data, id_receta };
      const res = await createIngredientes(dataWithId);
      console.log(res);

      setSuccessMessage("Ingrediente agregado exitosamente");
      setIngredientesExistentes((prev) => [...prev, data]);
      reset();
    } catch (error) {
      console.error("Ingrediente existente:", error);
      setErrorMessage("El ingrediente ya existe.");
    }

    setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage("");
    }, 3000);
  });

  return (
    <div
      className="container mt-5"
      style={{
        paddingBottom: "80px",
      }}
    >
      <form
        onSubmit={onsubmit}
        className="p-4 border rounded shadow-sm mx-auto"
        style={{
          maxWidth: "400px",
          backgroundColor: "#ffffff",
        }}
      >
        <h3
          className="text-center mb-4"
          style={{ color: "#8C8C8C", fontWeight: "bold" }}
        >
          Agregar Ingrediente
        </h3>
        {successMessage && (
          <div className="alert alert-success text-center">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="alert alert-danger text-center">{errorMessage}</div>
        )}
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
            type="number"
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
