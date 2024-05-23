const nameInput = document.getElementById('POST-name');
const {initDB, readAll, insertarRecord} = require('./model')
const saveButton = document.getElementById('saveButton');

const playerName = nameInput.value;
const url = '/puntos'; 
const data = {
    nombre: playerName,
    puntuacion: 30
};

saveButton.addEventListener('click', insertarRecord(playerName, 30))
{event.preventDefault()}; 
    

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

module.exports = {
    data
}