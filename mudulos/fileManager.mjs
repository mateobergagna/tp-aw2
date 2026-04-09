// Importa funciones para escribir y leer archivos de forma asincrónica
import { writeFile, readFile } from 'fs/promises';
// Importa el módulo path para manejar rutas de archivos
import path from 'path';

const filePath = path.resolve('data/users.json');

// Función para guardar usuarios en un archivo JSON
export async function saveUsers(users) {
    try {
        await writeFile(filePath, JSON.stringify(users, null, 2));
        console.log("Datos guardados correctamente");
    } catch (error) {
        console.error("Error al guardar:", error.message);
        throw error;
    }
}

// Función para leer usuarios desde el archivo JSON
export async function readUsers() {
    try {
        const data = await readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error al leer:", error.message);
        throw error;
    }
}