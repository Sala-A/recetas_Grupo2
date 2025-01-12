import { useNavigate } from 'react-router-dom'
///import { Calificacion } from '../pages/Calificacion';


export function CalificacionCard({calificacion}){
  
    const navigate = useNavigate();  
  return(
    <div style={{background: "#cac0ff3d"}}

        //Para poder eliminar se arma la ruta
        onClick={()=>{
            navigate('/Calificacion/' + calificacion.id_calificacion)
        }}
        >
      <h1>Detalles de la Calificación</h1>
      <p>Puntuación: {calificacion.puntuacion}</p>
      <p>Comentario: {calificacion.comentario}</p>
      <p>Fecha: {calificacion.fecha}</p>
      <p><strong>Receta:</strong> {calificacion.id_receta}</p>
          
                           <hr/>
    </div>
);
} 
   