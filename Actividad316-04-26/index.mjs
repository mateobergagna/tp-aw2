// index.mjs
import http from 'node:http';
import { obtenerUsuariosDeAPI } from './api.mjs';
import { guardarUsuarios, leerUsuariosLocal } from './archivoFS.mjs';

const PORT = 3000;

const server = http.createServer(async (req, res) => {
    const { url, method } = req;

    try {
        // Lógica para la ruta principal /usuarios [cite: 12]
        if (method === 'GET' && url === '/usuarios') {
            const usuarios = await obtenerUsuariosDeAPI(); // 1. Pedir a API externa
            await guardarUsuarios(usuarios);               // 2. Guardar en JSON [cite: 11]
            const contenido = await leerUsuariosLocal();   // 3. Leer archivo local
            
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(contenido);
        }

        // Extra: Ruta filtrada con ID < 10 [cite: 31]
        if (method === 'GET' && url === '/usuarios/filtrados') {
            const usuarios = await obtenerUsuariosDeAPI();
            const filtrados = usuarios.filter(u => u.id < 10);
            
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify(filtrados));
        }

        // Manejo de rutas no encontradas (404) [cite: 12]
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Recurso no encontrado');

    } catch (error) {
        // Gestión de errores con try/catch [cite: 30]
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error interno: ' + error.message);
    }
});

server.listen(PORT, () => {
    console.log(`Servidor intermediario escuchando en http://localhost:${PORT}`);
});