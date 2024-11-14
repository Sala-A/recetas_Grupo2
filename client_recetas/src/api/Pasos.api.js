import axios from "axios";

const pasosApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/pasos/',
});

export const getAllPasos = () => pasosApi.get("/");
export const getPaso = (id) => pasosApi.get("/" + id + "/");
export const createPaso = (paso) => pasosApi.post("/", paso);
export const deletePaso = (id) => pasosApi.delete("/" + id + "/");
export const updatePaso = (id, paso) => pasosApi.put("/" + id + "/", paso);
