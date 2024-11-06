import axios from "axios";

export const getAllRecetas = () => {
  return axios.get("http://127.0.0.1:8000/api/Dosificar/");
};
