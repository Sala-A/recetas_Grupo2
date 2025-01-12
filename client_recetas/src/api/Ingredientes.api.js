import axios from "axios";

const ingredientesApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/ingredientes/'
})

export const getAllIngredientes = () => ingredientesApi.get("/");
export const getIngredientes = (id) => ingredientesApi.get("/" + id + "/");
export const createIngredientes = (ingrediente) => ingredientesApi.post("/",ingrediente);
export const deleteIngredientes = (id) => ingredientesApi.delete("/" + id + "/");
export const updateIngrediente = (id, ingrediente) => ingredientesApi.put("/" + id + "/", ingrediente);