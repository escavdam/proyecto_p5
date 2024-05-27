# Asegurar apps

- Vigilad vuestros repositorios y ramas antes de empezar a trabajar o lanzar un servidor.
- Evitad el envio de "x-powered-by" en el servidor.
- Limitar el acceso a endpoints si no viene desde nuestra página
- Añade un logger, guarda registros de *TODOS* los sucesos relevantes
  - Visitas a endpoints que no deberian ser accesibles
  - Visitas a endpoints accesibles por usuarios
  - Historial de base de datos
- Limitar el numero de llamadas ("limit rate") en nuestros endpoints
- Limitar el numero de caracteres en los campos de texto que llegan a la base de datos
- Limitar los valores numericos
- Limpiar datos que lleguen desde el front, asegúrate de que los datos son correctos y del tipo que esperas, si el valor es numérico asegúrate de que es o no decimal segun tu aplicación.
- Ten cuidado con los infinitos y los números periódicos.
