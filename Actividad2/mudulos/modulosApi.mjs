export async function getUsers() {
    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/users');

        if (!response.ok) {
            throw new Error("Error al obtener datos");
        }

        const data = await response.json();

        // Filtrar datos
        const users = data.map(user => ({
            id: user.id,
            email: user.email,
            name: user.name
        }));

        return users;

    } catch (error) {
        console.error("Error en API:", error.message);
        throw error;
    }
}
