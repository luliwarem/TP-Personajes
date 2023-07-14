# TP-Personajes

Utiliza Nodemon, Express, SQL, Cors, Swagger.
Clonar el repositorio entero, para instalar dependencias ejecutar `npm i --force`

Para la autenticacion utiliza el metodo bearer token mediante la [jwt strategy](https://jwt.io/)

Posee una collection de postman para acceder a todos los endpoints.
El archivo de swagger *openapi.yaml* tiene la descripcion de todos los endpoints con sus correspondientes paramentros.

La base de datos tiene que ser creada manualmente con el nombre "TP-Personajes".
Ejecutar dentro de la misma los archivos **

Dentro del archivo *.env* hay variables de entrono para adecuar a el codigo, posee la key, el issuer, server y otros variables configurables.
Para levantar el ptoyecto ejecutar `npm run start`
