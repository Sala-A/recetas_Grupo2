import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IngredientesTable } from "./IngredientesTable";
import { getIngredientes, createIngredientes } from "../api/Ingredientes.api";

export function FormIngredientes() {
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
  const [ingredienteActual, setIngredienteActual] = useState(null); // Para edición

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
    if (ingredienteActual) {
      const updatedIngredientes = ingredientesExistentes.map((ingrediente) =>
        ingrediente.id_ingredientes === ingredienteActual.id_ingredientes
          ? { ...ingrediente, ...data }
          : ingrediente
      );
      setIngredientesExistentes(updatedIngredientes);
      setIngredienteActual(null);
      setSuccessMessage("Ingrediente actualizado exitosamente.");
    } else {
      const ingredienteDuplicado = ingredientesExistentes.some(
        (ingrediente) =>
          ingrediente.nombre.toLowerCase() === data.nombre.toLowerCase()
      );

      if (ingredienteDuplicado) {
        setErrorMessage("Ya existe un ingrediente con este nombre.");
        return;
      }

      try {
        const newIngrediente = { ...data, id_receta };
        const res = await createIngredientes(newIngrediente);
        console.log(res);

        setIngredientesExistentes([...ingredientesExistentes, newIngrediente]);
        setSuccessMessage("Ingrediente agregado exitosamente.");
      } catch (error) {
        console.error("Error al agregar ingrediente:", error);
        setErrorMessage("Ocurrió un error al agregar el ingrediente.");
      }
    }

    reset();
    setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage("");
    }, 3000);
  });

  const eliminarIngrediente = (id_ingredientes) => {
    const updatedIngredientes = ingredientesExistentes.filter(
      (ingrediente) => ingrediente.id_ingredientes !== id_ingredientes
    );
    setIngredientesExistentes(updatedIngredientes);
    setSuccessMessage("Ingrediente eliminado exitosamente.");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="container mt-5" style={{ paddingBottom: "80px" }}>
      <form
        onSubmit={onsubmit}
        className="p-4 border rounded shadow-sm mx-auto"
        style={{ maxWidth: "400px", backgroundColor: "#ffffff" }}
      >
        <h3
          className="text-center mb-4"
          style={{ color: "#8C8C8C", fontWeight: "bold" }}
        >
          {ingredienteActual ? "Editar Ingrediente" : "Agregar Ingrediente"}
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
              validate: (value) => {
                // Verifica si el valor es un número decimal (puede ser algo como "1.5")
                const validDecimal = /^[0-9]+(\.[0-9]+)?$/.test(value);
                return validDecimal || "Por favor ingrese una cantidad válida";
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
            backgroundColor: "#4CBD49",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          Guardar
        </button>
      </form>
      <IngredientesTable
        ingredientes={ingredientesExistentes}
        onEliminar={eliminarIngrediente}
      />
    </div>
  );
}
