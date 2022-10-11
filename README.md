# Riego APP

Aplicación que toma datos de sensores y los muestra a través de un gráfico, así como también puede abrir y cerrar válvulas y mostrar logs de las mismas.

## Ejecución local

Se utiliza ionic para frontend y docker compose para frontend

En carpeta /backend:
```bash
docker-compose up
```


En carpeta /frontend:
```bash
ionic serve
```

## Detalles de frontend

La aplicación fue desarrollada con las herramientas Ionic y Angular. Dentro de la carpeta /src/app se pueden observar los elementos de la misma.

### Services
Son las clases destinadas a la conexión con el backend. Se le inyecta un objeto de tipo HttpClient y es inyectado en los diferentes componentes que renderizan.
- Dispositivos
- Medicion
- Valvula

### Model
Dentro de esta carpeta están detalladas las clases de dominio que utiliza el frontend desde su recepción del backend hasta su renderizado.
- Dispositivo
- Log
- Medicion

### Pages
Cada page incluye un archivo TS, HTML y CSS para su renderizado. También un archivo de ruteo propio.
- Dispositivo
- Home: incluye la lista de dispositivos
- Mediciones
- Valvula

Además se encuentra el componente detalleSensor que se incluye dentro de la página del dispositivo.

## Detalles del backend
El mismo está implementado con Node, utilizando express y con una base de datos SQL, montado sobre docker.

### Ruteo
Dentro de backend/index.js se encuentran detallados los endpoint publicados por la API:
- GET /dispositivo --> Retorna todos los dispositivos
- GET /dispositivo/:id --> Retorna el dispositivo con id pasado por parámetro.
- GET /medicion/:dispositivoId --> Retorna todas las mediciones correspondientes a un dispositivo
- POST /medicion --> Inserta una nueva medición para un dispositivo. Enviar en el body;
      -valor: Número entre 0 y 100.
      -dispositivoId: valor numérico mayor a 0.
- GET /valvula/log/:id --> Retorna todos los logs correspondientes a una electroválvula
- POST /valvula/log --> Inserta un nuevo log para una electroválvula. Enviar en el body;
      -apertura: boolean.
      -electrovalvulaId: valor numérico mayor a 0.

## Autor
Leandro Percivati
