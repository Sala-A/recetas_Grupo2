import { useEffect, useState } from "react";
import { getAllCalificacion } from "../api/Calificacion.api"; 
import { CalificacionCard } from "./CalificacionCard";

export function CalificacionList() {
    const [calificaciones, setCalificaciones] = useState([]);  

    useEffect(() => {
        async function loadCalificaciones() {
            const res = await getAllCalificacion();  // Usamos getAllCalificacion para obtener todas las calificaciones
            console.log(res);  // Opcional, solo para depuración
            setCalificaciones(res.data);  // Guardamos las calificaciones obtenidas en el estado
        }
        loadCalificaciones();  // Llamamos a la función para cargar los datos
    },[]);

    return (
        <div>
            {calificaciones.map((calificacion) => (  // Usamos 'calificacion' como parámetro en el map
                <CalificacionCard key={calificacion.id_calificacion} calificacion={calificacion} />
            ))}
        </div>
    );
}


