import axios from "axios";

const recetasApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/recetas/'
})

export const getAllRecetas = () => recetasApi.get("/");
export const getReceta = (id) => recetasApi.get("/" + id + "/");
export const createRecetas = (receta) => recetasApi.post("/",receta);
export const deleteRecetas = (id) => recetasApi.delete("/" + id + "/");
export const updateReceta = (id,receta) => recetasApi.put("/" + id + "/", receta);