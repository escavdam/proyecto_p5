# Equipo Alvaro + Cristian:

- Añadid colisiones con los bordes de la pantalla
- Integrad el grid que han desarrollado en la rama correspondiente, intentad marcar las baldosas donde esta el personaje pintandolas de otro color.
- Aislad el comportamiento del jugador en una clase

# Equipo Javi + Lucas

- Crear movimiento con CELLSIZE
- Limitar movimiento para que no se salga de la pantalla
- Integrad el grid que se ha desarrollado en la rama correspondiente, intentad marcar las baldosas donde esta el personaje pintandolas de otro color.
- Aislad el comportamiento del jugador en una clase

# Canton

- Crear `init.sql` para la base de datos de puntuaciones, necesitaremos una tabla con los siguientes datos:
    - id
    - nombre
    - puntos
- Asegúrate de poder lanzar multiples veces tu `init.sql` sin que se rompa!

# Diego

- Crear CRUD
    - Función para insertar nuevos records
    - Función para leer todos los records
    - Función para resetear db

# Makram

- Crea el endpoint `GET /puntos`, en este endpoint utilizarás la función que creará @Diego siguiendo la estructura de datos que hay planteada en las tareas de @Canton.
- Devuelve un json hardcodeado que simule una respuesta de nuestra base de datos, `GET /puntos` devolverá una lista con varios objetos que contienen el *nombre* y los *puntos* de los jugadores con records.
- Crea el endpoint `POST /puntos`, en este endpoint por ahora debes esperar a que @Diego termine su CRUD, mientras tanto devuelve el texto "todo ok"

# Idaira

Necesitamos una opcion de debugging sencilla que muestre informacion relativa al juego en pantalla utilizando `text()`.
- Crea una funcion que espera un objeto con diferentes variables como argumento. Muestra en el canvas la informacion, no tienes que complicarte mucho, puedes imprimir el texto en el x=0 y=0:

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  const textito = `
mouseX: ${mouseX} 
mouseY: ${mouseY}
random: ${random()}
noise: ${int(noise(frameCount/100)*25)}`
text(textito, 0, 0)
}
```
- Tambien deberiamos incorporar esto al debugging en lugar de usar console.log():
```js
if(keyIsPressed) console.log(keyCode, key);
```

# Equipo Camacho + Ale

- Cread una clase para las **celdas** de nuestro grid, necesitamos que en el constructor tengamos una x y una y
- Añade un metodo `show` que muestre un rectangulo
- Cread una clase para el **grid** de nuestro escenario, esta clase deberá instanciar las celdas que componen nuestro escenario

