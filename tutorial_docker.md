# Docker NodeJS

## .dockerignore
Muy similar a .gitignore, pero para nuestro contenedor.

```
node_modules
npm-debug.log
```

## Dockerfile
El archivo Dockerfile contiene la descripcion del entorno que docker tiene que preparar para que la aplicación funcione:

```
# Usa una imagen base oficial de Node.js de Docker Hub
FROM node:20-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto que la aplicación usa (por ejemplo, 3000)
EXPOSE 3000

# Define el comando por defecto para ejecutar la aplicación
CMD ["npm", "start"]
```

## Build

Una vez tienes los archivos, puedes lanzar la build de la imagen del contenedor con `docker buildx build -t nombre_de_tu_imagen path_de_tu_app`.

## Run

Puedes lanzar la imagen con `docker run -d -p 3000:3000 jueguico`.

## Analizar dockers en ejecucion

`docker ps` muestra cualquier contenedor que esta ejecutandose en el momento.

`docker ps -a` muestra *todos* los contenedores lanzados.

## Parar un docker

`docker stop nombre_de_tu_contenedor` para detenerlo.

