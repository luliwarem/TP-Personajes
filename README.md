# TP-Personajes

### Info general
Este trabajo practico es una api backend que posee endpoints relacionados a una base de datos de peliculas y presonajes. Con esta api podras crear, eliminar, actualizar y obtener tanto peliculas como personajes. 

### Tecnologias y dependencias
- [Node v18.14.0](https://nodejs.org/es/docs)
- [Nodemon v9.3.1](https://nodemon.io/)
- [Cors v2.8.5](https://www.npmjs.com/package/cors)
- [Express v4.18.2](https://expressjs.com/)
- [MSSQL Server v9.1.1](https://learn.microsoft.com/en-us/sql/?view=sql-server-ver16)
- [Swagger v1.0.11](https://swagger.io/docs/)
- Para la autenticacion utiliza el metodo bearer token mediante la [jwt strategy](https://jwt.io/)

Posee una [collection de postman](./TP-Personajes.postman_collection.json) para acceder a todos los endpoints.
El archivo de swagger *openapi.yaml* tiene la descripcion de todos los endpoints con sus correspondientes paramentros.

Dentro del archivo *.env* hay variables de entrono para adecuar a el codigo, posee la key, el issuer, server y otros variables configurables.

### Pasos para ejecutar
- Crear un repositorio local y clonar el proyecto con estos comandos.
```bash
git clone https://github.com/luliwarem/TP-Personajes.git
```
- Instalar dependencias ejecutar `npm i`
- Crear la base de datos "TP-Personajes" en MSSQL Server
- Ejecutar *01 - CreateLoginAndUser.sql* en la base datos
- Ejecutar *TP-Personajes.sql* en la base datos
- Adecuar las variables del archivo *.env*
- Ejecutar `npm run start`

### Postman
Cuando el proyecto ya esta corriendo, podemos importar la [collection de postman](./TP-Personajes.postman_collection.json).

Alli estaran todos los endpoints con sus respectivos parametros para probar. 

### Swagger 

En el archivo de [Swagger](./openapi.yaml) podremos encontrar las especificaciones de todos los endpoints, sus parametros, retornos y toda la informacion necesaria para utilizarlos. 

### ⚠️A tener en cuenta

- La url a acceder desde postman debera estar relacionada al puerto en el cual se este levantando, por default es el 3000.
- Todos los enpoints requieren de token, siempre se debera generar el mismo y completar en la parte de "Authorization" de cada uno en postman

### Proyecto realizado por:

- [Maia Szmedra](https://github.com/maiaszmedra)
  > Contacto: maiaszmedra@gmail.com
- [Tami Schnaiderman](https://github.com/tamischnaiderman1)
  > Contacto: tamischnaiderman@gmail.com
- [Luciana Waremkraut](https://github.com/luliwarem)
  > Contacto: luliwarem@gmail.com

Happy Coding!😄
