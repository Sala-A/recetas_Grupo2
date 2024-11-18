import { useEffect, useState } from "react";
import { getAllIngredientes } from "../api/Ingredientes.api";
import CardsIngredients from "./CardsIngredients";
import { useParams } from "react-router-dom";

export function ListIngredients() {
  const { id_receta } = useParams();
  const [ingredientes, setIngredientes] = useState([]);

  useEffect(() => {
    async function loadIngredientes() {
      const res = await getAllIngredientes();

      const recetaId = parseInt(id_receta, 10);

      const filteredIngredientes = res.data.filter(
        ingrediente => ingrediente.id_receta === recetaId
      );
      setIngredientes(filteredIngredientes);
    }
    loadIngredientes();
  }, [id_receta]);

  return (
    <>
      {ingredientes.length > 0 ? (
        ingredientes.map(ingrediente => (
          <CardsIngredients key={ingrediente.id_ingredientes} ingrediente={ingrediente} />
        ))
      ) : (
        <p>No hay ingredientes para esta receta.</p>
      )}
    </>
  );
}