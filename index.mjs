//verificar que el programa arranca
console.log("Se está ejecutando el programa");

// Importa la función que obtiene los usuarios desde la API
// Importa las funciones para guardar y leer archivos JSON
import { getUsers } from './mudulos/modulosApi.mjs';
import { saveUsers, readUsers } from './mudulos/fileManager.mjs';

// Función principal del programa
async function main() {
    try {
        // 1. Obtener datos
        const users = await getUsers();

        // 2. Guardar
        await saveUsers(users);

        // 3. Leer
        const usersFromFile = await readUsers();

        // 4. Mostrar
        console.log("Usuarios:");
        console.log(usersFromFile);

    } catch (error) {
        console.error("Error general:", error.message);
    }
}

main();