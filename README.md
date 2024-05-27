# Consulta de Asesoría Energética

Este proyecto es una aplicación web sencilla que permite buscar y filtrar contratos de asesoría energética desde un archivo JSON local. Los resultados se muestran en una tarjeta y se genera un gráfico de barras que muestra el número de contratos por comercializadora.

## Contenido del Proyecto

- `index.html`: Contiene la estructura principal de la página web.
- `scripts.js`: Contiene el código JavaScript para manejar la lógica de búsqueda y generación de gráficos.
- `datos.json`: Archivo JSON local con datos de contratos.
- `README.md`: Este archivo.

## Requisitos

- Navegador web moderno (Chrome, Firefox, etc.).
- Servidor web local (opcional pero recomendado) para evitar problemas de CORS al cargar el archivo JSON.

## Instrucciones de Uso

1. Clona este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web. Para evitar problemas de CORS, es recomendable usar un servidor web local. Puedes usar una de las siguientes opciones:

### Usar Python para servir el archivo localmente

Si tienes Python instalado, puedes usar el servidor HTTP incorporado para servir los archivos. Abre una terminal y navega hasta el directorio del proyecto, luego ejecuta:

Para Python 3:
```bash
python -m http.server 8000
