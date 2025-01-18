<p align="center">
  <a target="blank">
    <img src="https://expressjs.com/images/brand/logo-dark.svg" width="120" alt="Nest Logo" />
  </a>
  <a target="blank" style="margin-left: 20px;">
    <img src="https://dwglogo.com/wp-content/uploads/2017/12/1100px_Redis_Logo_01.png" width="120" alt="GraphQL Logo" />
  </a>
</p>

# EXPRESS + REDIS

Este proyecto ofrece un ejemplo práctico de cómo utilizar Redis junto con Node.js como sistema de caché, con el objetivo de optimizar la velocidad de respuesta al cliente mediante el uso de diversas APIs públicas.

## Instalar los modulos de node

```bash
$ npm install
```

## Configurar las variables de entorno
Clonar el archivo `.env.template` a `.env` y configurar las variables de entorno

## Levantar servidor de Redis con docker
```bash
$ docker compose up -d
```

## Compilar y correr el proyecto

```bash
# development
$ npm run start:dev
```