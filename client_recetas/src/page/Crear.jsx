import { useEffect, useState } from "react";
import {
  createRecetas,
  deleteRecetas,
  getReceta,
  updateReceta,
} from "../api/Recetas.api";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export const Crear = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();
  const [imagenUrl, setImagenUrl] = useState("");

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
      if (params.id) {
        console.log("Modificado...");
        await updateReceta(params.id, formData);
      } else {
        const res = await createRecetas(formData);
        console.log(res);
      }
      navigate("/RecetasList");
    } catch (error) {
      console.error("Error en la solicitud:", error.response?.data);
    }
  };

  useEffect(() => {
    async function loadReceta() {
      if (params.id) {
        console.log("solicitar datos");
        const res = await getReceta(params.id);
        console.log(res);
        setValue("nombre", res.data.nombre);
        setValue("descripcion", res.data.descripcion);
        setValue("tiempo_preparacion", res.data.tiempo_preparacion);
        setValue("numero_comensales", res.data.numero_comensales);
        setValue("categoria", res.data.categoria);
        setImagenUrl(res.data.imagen);
      }
    }
    loadReceta();
  }, [params.id, setValue]);

  const botones = {
    margin: "auto",
    width: "300px",
    color: "#fff",
    fontSize: "1.8rem",
  };

  return (
    <div className="container py-4">
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
        <h1 className="mb-4 text-center" style={{ color: "#FC4B08" }}>
          Gestión de recetas
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
        {imagenUrl && (
          <div className="mb-3">
            <img
              src={imagenUrl}
              alt="Imagen actual de la receta"
              style={{ maxWidth: "200px", borderRadius: "10px" }}
            />
          </div>
        )}
        <input
          id="imagen"
          {...register("imagen", {
            required: params.id
              ? false
              : "Poner una imagen relacionada con tu receta",
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
        <div className="d-flex justify-content-center gap-3 mt-3"></div>
        <button
          type="submit"
          className="btn"
          style={{ ...botones, backgroundColor: "#4CBD49" }}
        >
          Guardar
        </button>
        <div />
      </form>
      {params.id && (
        <div className="d-flex justify-content-center mt-3">
          <button
            style={{ ...botones, backgroundColor: "#FC4B08" }}
            className="btn"
            onClick={async () => {
              const accepted = window.confirm("¿Deseas eliminar esta receta?");
              if (accepted) {
                await deleteRecetas(params.id);
                navigate("/recetasList");
              }
            }}
          >
            Eliminar
          </button>
        </div>
      )}
    </div>
  );
};
