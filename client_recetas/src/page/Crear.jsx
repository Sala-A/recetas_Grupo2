import { createRecetas } from "../api/Recetas.api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Crear = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("nombre", data.nombre);
    formData.append("descripcion", data.descripcion);
    formData.append("tiempo_preparacion", data.tiempo_preparacion);
    formData.append("categoria", data.categoria);
    formData.append("numero_comensales", data.numero_comensales);

    if (data.imagen && data.imagen[0]) {
      formData.append("imagen", data.imagen[0]);
    }

    try {
      const res = await createRecetas(formData, {});
      console.log(res);
      navigate("/Home");
    } catch (error) {
      console.error("Error en la solicitud:", error.response?.data);
    }
  };

  return (
    <div className="container py-4">
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
        <h1 className="mb-4 text-center" style={{ color: "#FC4B08" }}>
          Crear una receta
        </h1>

        <label htmlFor="nombre" className="mb-2">
          Nombre para tu receta
        </label>
        <input
          id="nombre"
          {...register("nombre", {
            required: "El nombre para la receta es obligatorio",
          })}
          type="text"
          className="form-control mb-3"
          style={{ borderColor: "#4CBD49" }}
        />
        {errors.nombre && (
          <p className="text-danger">{errors.nombre.message}</p>
        )}

        <label htmlFor="descripcion" className="mb-2">
          Descripción
        </label>
        <textarea
          id="descripcion"
          {...register("descripcion", {
            required: "La descripción es obligatoria",
          })}
          className="form-control mb-3"
          style={{ resize: "none", borderColor: "#4CBD49" }}
        ></textarea>
        {errors.descripcion && (
          <p className="text-danger">{errors.descripcion.message}</p>
        )}

        <label htmlFor="tiempo_preparacion" className="mb-2">
          Tiempo de preparación
        </label>
        <input
          id="tiempo_preparacion"
          {...register("tiempo_preparacion", {
            required: "El tiempo de preparación es obligatorio",
          })}
          type="number"
          className="form-control mb-3"
          style={{ borderColor: "#4CBD49" }}
        />
        {errors.tiempo_preparacion && (
          <p className="text-danger">{errors.tiempo_preparacion.message}</p>
        )}

        <label htmlFor="categoria" className="mb-2">
          Categoría
        </label>
        <select
          id="categoria"
          {...register("categoria")}
          className="form-control mb-3"
          style={{ borderColor: "#4CBD49" }}
        >
          <option value="opcion1">Postres</option>
          <option value="opcion2">Almuerzo</option>
          <option value="opcion3">Cena</option>
          <option value="opcion4">Desayuno</option>
          <option value="opcion5">Bebidas</option>
        </select>

        <label htmlFor="imagen" className="mb-2">
          Imagen
        </label>
        <input
          id="imagen"
          {...register("imagen", {
            required: "Poner una imagen relacionada con tu receta",
          })}
          type="file"
          accept="image/*"
          className="form-control mb-3"
          style={{ borderColor: "#4CBD49" }}
        />
        {errors.imagen && (
          <p className="text-danger">{errors.imagen.message}</p>
        )}

        <label htmlFor="numero_comensales" className="mb-2">
          Número de comensales
        </label>
        <input
          id="numero_comensales"
          {...register("numero_comensales", {
            required: "Indica el número de comensales",
          })}
          type="number"
          className="form-control mb-3"
          style={{ borderColor: "#4CBD49" }}
        />
        {errors.numero_comensales && (
          <p className="text-danger">{errors.numero_comensales.message}</p>
        )}

        <button
          type="submit"
          className="btn"
          style={{
            margin:'auto',
            width: "300px",
            backgroundColor: "#FC4B08",
            color: "#fff",
            fontSize: "1.8rem",
          }}
        >
          Guardar
        </button>
      </form>
    </div>
  );
};
