document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('scoreForm');
    const saveButton = document.getElementById('saveButton');

    saveButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        const nameInput = document.getElementById('POST-name');
        const playerName = nameInput.value;

        if (playerName) {
            const url = '/puntos'; // URL a la que se hará la petición
            const data = {
                nombre: playerName,
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
                // Aquí puedes manejar la respuesta del servidor, por ejemplo, mostrando un mensaje de éxito
                form.style.display = 'none'; // Ocultar el formulario después de guardar
            })
            .catch(error => {
                console.error('Hubo un problema con la petición:', error);
                // Aquí puedes manejar errores, por ejemplo, mostrando un mensaje de error
            });
        } else {
            alert('Por favor, ingresa tu nombre.');
        }
    });
});