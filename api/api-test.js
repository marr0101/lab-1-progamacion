const API_URL = 'https://jsonplaceholder.typicode.com';

// GET
async function obtenerPost() {
    const respuesta = await fetch(`${API_URL}/posts/1`);

    console.log('GET');
    console.log('Código de estado:', respuesta.status);

    const datos = await respuesta.json();
    console.log('Respuesta:', datos);
}

// POST
async function crearPost() {
    const respuesta = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Laboratorio 1',
            body: 'Prueba de petición POST',
            userId: 1
        })
    });

    console.log('\nPOST');
    console.log('Código de estado:', respuesta.status);

    const datos = await respuesta.json();
    console.log('Respuesta:', datos);
}

// DELETE
async function eliminarPost() {
    const respuesta = await fetch(`${API_URL}/posts/1`, {
        method: 'DELETE'
    });

    console.log('\nDELETE');
    console.log('Código de estado:', respuesta.status);
}

async function ejecutarPruebas() {
    await obtenerPost();
    await crearPost();
    await eliminarPost();
}

ejecutarPruebas();