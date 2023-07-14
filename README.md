# TP-Personajes

### Info general
Este trabajo practico es una api backend que posee endpoints relacionados a una base de datos de peliculas y presonajes. Con esta api podras crear, eliminar, actualizar y obtener tanto peliculas como personajes. 

### Tecnologias y dependencias
- [Node v18.14.0](https://nodejs.org/es/docs)
- [Nodemon v9.3.1](https://nodemon.io/)
- [Cors v2.8.5](https://www.npmjs.com/package/cors)
- [Express v4.18.2](https://expressjs.com/)
- [MSSQL Server v9.1.1](https://learn.microsoft.com/en-us/sql/?view=sql-server-ver16)
- [Swagger ]

Para la autenticacion utiliza el metodo bearer token mediante la [jwt strategy](https://jwt.io/)

Posee una [collection de postman](./TP-Personajes.postman_collection.json) para acceder a todos los endpoints.
El archivo de swagger *openapi.yaml* tiene la descripcion de todos los endpoints con sus correspondientes paramentros.

Dentro del archivo *.env* hay variables de entrono para adecuar a el codigo, posee la key, el issuer, server y otros variables configurables.

### Pasos para ejecutar
- Clonar el repositorio entero
- Instalar dependencias ejecutar `npm i`
- Crear la base de datos "TP-Personajes" en MSSQL Server
- Ejecutar *01 - CreateLoginAndUser.sql* en la base datos
- Ejecutar *TP-Personajes.sql* en la base datos
- Adecuar las variables del archivo *.env*
- Ejecutar `npm run start`
