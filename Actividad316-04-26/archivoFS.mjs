// archivoFS.mjs
import fs from 'node:fs/promises';
import path from 'node:path';

const RUTA_ARCHIVO = path.join(process.cwd(), 'usuarios.json');

export const guardarUsuarios = async (datos) => {
    try {
        // Convertimos el objeto a string antes de guardar [cite: 11]
        await fs.writeFile(RUTA_ARCHIVO, JSON.stringify(datos, null, 2));
    } catch (error) {
        throw new Error('Error al escribir el archivo');
    }
};

export const leerUsuariosLocal = async () => {
    try {
        const datos = await fs.readFile(RUTA_ARCHIVO, 'utf-8');
        return datos;
    } catch (error) {
        throw new Error('Error al leer el archivo local');
    }
};