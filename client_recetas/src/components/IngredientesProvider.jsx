import { useEffect, useState } from "react";
import { getAllIngredientes } from "../api/Ingredientes.api";
import { useParams } from "react-router-dom";

export function IngredientesProvider({ children }) {
  const { id_receta } = useParams();
  const [ingredientes, setIngredientes] = useState([]);
  const [loading, setLoading] = useState(true); // Para manejar el estado de carga
  const [error, setError] = useState(null); // Para manejar errores

  useEffect(() => {
    async function loadIngredientes() {
      try {
        const res = await getAllIngredientes();

        if (res.data) {
          const recetaId = parseInt(id_receta, 10);
          const filteredIngredientes = res.data.filter(
            (ingrediente) => ingrediente.id_receta === recetaId
          );
          setIngredientes(filteredIngredientes);
        }
      } catch (error) {
        setError("Hubo un error al cargar los ingredientes.");
        console.error("Error en la solicitud:", error);
      } finally {
        setLoading(false);
      }
    }

    loadIngredientes();
  }, [id_receta]);

  if (loading) {
    return <div>Cargando ingredientes...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <>{children(ingredientes)}</>;
}
