// api.mjs
const API_URL = 'https://api.escuelajs.co/api/v1/users';

export const obtenerUsuariosDeAPI = async () => {
    try {
        const respuesta = await fetch(API_URL);
        if (!respuesta.ok) throw new Error('Error al obtener datos de la API');
        return await respuesta.json();
    } catch (error) {
        throw error;
    }
};