import axios from 'axios';

const calificacionApi = axios.create({
    baseURL:'http://127.0.0.1:8000/api/calificacion/'
})

export const getAllCalificacion = () =>calificacionApi.get('/');
export const getCalificacion = (id) =>calificacionApi.get('/' + id + '/');
export const createCalificacion = (calificacion) =>calificacionApi.post('/', calificacion);
export const deleteCalificacion = (id) => calificacionApi.delete('/' + id + '/');
export const updateCalificacion = (id, calificacion) => calificacionApi.put('/' + id + '/', calificacion);