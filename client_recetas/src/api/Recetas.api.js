import axios from "axios";

const recetasApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/recetas/'
})

export const getAllRecetas = () => recetasApi.get("/");
export const createRecetas = (receta) => recetasApi.post("/",receta);