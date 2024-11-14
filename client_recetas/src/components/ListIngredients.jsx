import { useEffect, useState } from "react";
import { getAllIngredientes } from "../api/Ingredientes.api";
import CardsIngredients from "./CardsIngredients";

export function ListIngredients() {
  const [ingredientes, setIngredientes] = useState([]);

  useEffect(() => {
    async function loadIngredientes() {
        const res = await getAllIngredientes();
        setIngredientes(res.data); 
    }
    loadIngredientes();
  }, []);

  return (
    <>
      {ingredientes.map(ingrediente => (
        <CardsIngredients key={ingrediente.id_receta} ingrediente={ingrediente} />
      ))}
    </>
  );
}