import axios from "axios";

export const getAllDosificar = () => {
  return axios.get("http://127.0.0.1:8000/api/Dosificar/");
};