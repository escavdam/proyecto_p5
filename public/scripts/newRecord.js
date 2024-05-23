const url = '/puntos'; 
const data = {
    nombre: 'Juan',
    puntuacion: 30
};

fetch(url, {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json' 
    },
    body: JSON.stringify(data) 
})

.then(response => {
    if (!response.ok) {
        throw new Error('Error en la red: ' + response.statusText);
    }
    return response.json(); 
})
.then(data => {
    console.log('Respuesta del servidor:', data); 
})
.catch(error => {
    console.error('Hubo un problema con la petición:', error); 
});