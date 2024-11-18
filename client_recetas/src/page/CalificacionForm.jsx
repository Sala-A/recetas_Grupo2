import { useEffect, useState } from 'react';
import { createCalificacion, deleteCalificacion, getCalificacion, updateCalificacion } from '../api/Calificacion.api';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
export function CalificacionForm() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [image, setImage] = useState(null); // Estado para almacenar la imagen
  const navigate = useNavigate();
  const { id } = useParams(); // Obtener el parámetro id de la URL

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    // Crear un objeto FormData para enviar la imagen y los demás datos
    const formData = new FormData();

    // Añadir los datos del formulario a FormData
    for (let key in data) {
      formData.append(key, data[key]);
    }
    // Validación para saber si va a crear o modificar una calificación
    try {
      if (id) {
        console.log("Modificando...");
        await updateCalificacion(id, formData); // Actualiza la calificación
      } else {
        console.log("Creando...");
        await createCalificacion(formData); // Crea la nueva calificación
      }

      // Después de la operación, navega a la lista de calificaciones
      navigate('/Calificacion');
    } catch (error) {
      console.error("Error en la operación", error);
      // Aquí puedes mostrar un mensaje de error si lo deseas
    }
  });

  // Para rellenar el formulario si hay un parámetro en la URL
  useEffect(() => {
    async function LoadCalificacion() {
      if (id) {
        console.log("Solicitar datos");
        const res = await getCalificacion(id);
        console.log(res);
        // Rellenar los campos del formulario con los datos de la calificación
        setValue("puntuacion", res.data.puntuacion);
        setValue("comentario", res.data.comentario);
        setValue("fecha", res.data.fecha);
        setValue("nombre_de_receta", res.data.nombre_de_receta);
              // Si ya existe imagen, mostrarla
        setImage(res.data.imagen);
      }
    }
    LoadCalificacion();
  }, [id, setValue]); // Asegúrate de agregar id y setValue como dependencias

  // Función para manejar la carga de la imagen


  return (
    <div>
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <input 
          type="number" 
          placeholder='ID de receta' 
          {...register("id_receta", { required: "id_receta es requerida" })} 
          
        />
        {errors.id_receta && <span>{errors.id_receta.message}</span>}

               <input 
          type="number" 
          placeholder='Puntuación' 
          {...register("puntuacion", { required: "Puntuación es requerida" })} 
        />
        {errors.puntuacion && <span>{errors.puntuacion.message}</span>}

        <input 
          type="text" 
          placeholder='Comentario' 
          {...register("comentario", { required: "Comentario es requerido" })} 
        />
        {errors.comentario && <span>{errors.comentario.message}</span>}

        <input 
          type="date"
          placeholder='Fecha' 
          {...register("fecha", { required: "La fecha es requerida" })} 
        />
        {errors.fecha && <span>{errors.fecha.message}</span>}

        

        <button type="submit">Guardar</button>
      </form>

      {id && (
        <button
          onClick={async () => {
            const accepted = window.confirm("¿Desea eliminar la calificación?");
            if (accepted) {
              try {
                await deleteCalificacion(id);
                navigate("/Calificacion");
              } catch (error) {
                console.error("Error al eliminar la calificación", error);
                // Aquí puedes agregar un mensaje de error si lo deseas
              }
            }
          }}
        >
          Borrar
        </button>
      )}
    </div>
  );
}
