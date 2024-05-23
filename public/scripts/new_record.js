const url = '/puntos'; // URL a la que se hará la petición
const data = {
    nombre: 'Juan',
    puntuacion: 30
};

fetch(url, {
    method: 'POST', // Especifica que el método es POST
    headers: {
        'Content-Type': 'application/json' // Especifica que el contenido es JSON
    },
    body: JSON.stringify(data) // Convierte el objeto data a una cadena JSON
})

.then(response => {
    if (!response.ok) {
        throw new Error('Error en la red: ' + response.statusText);
    }
    return response.json(); // Convierte la respuesta a JSON
})
.then(data => {
    console.log('Respuesta del servidor:', data); // Maneja la respuesta del servidor
})
.catch(error => {
    console.error('Hubo un problema con la petición:', error); // Maneja los errores
});
