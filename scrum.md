# Tareas

## Escenario 

1. Debemos crear una funcion que nos deje dividir el canvas en n partes iguales, tanto en el ancho como el alto.

2. Debemos almacenar las coordenadas de las plataformas en un array de objetos, donde cada objeto tenga las coordenadas *x* e *y*. El tamaño de las mismas viene dado por la division del canvas.

3. Debemos recorrer la lista de baldosas y pintarlas en el canvas.

## Jugador

- Mostrar al jugador //lucas y javi
- Controles del jugador
  - Teclado y 4 direcciones
  - Colision

## Puntuaciones y BBDD

- DB
  - Crear la base de datos, un archivo `.sql` //Dani
    - 
  - Crear el CRUD // Diego
    - Funcion para iniciar la base de datos
    - Funcion para insertar puntuaciones
    - Funcion para obtener puntuaciones
    - Funcion para resetear puntuaciones

  - Crear endpoints // Makram
    - GET /records, devuelve las puntuaciones y jugadores mediante la funcion del CRUD
    - POST /records, almacena puntuacion y jugador

## Debugging

- Debugging
  - Funcion para mostrar textos en pantalla que nos ayuden a debuggear 


## Variables y constantes

- CELLSIZE: Tamaño de las celdas
- ESCENARIO: Lista de baldosas
- JUGADOR: Objeto jugador