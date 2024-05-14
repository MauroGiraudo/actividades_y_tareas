import http from 'node:http';
import { readFile, appendFile } from 'node:fs/promises';
const port = 3000;

const server = http.createServer(async (req, res) => {
  const url = req.url.split('?')[0];
  if (req.method !== 'GET') {
    res.statusCode = 400;
    res.end('Just GET requests accepted');
  }
  //else if (existeRequest() === 'ENOENT') {
  //Intento probar que, si request.log no existe, entonces devuelva statusCode 501 y un mensaje. NO FUNCIONA
  //res.statusCode = 501;
  //res.end('request.log does not exist');
  //}
  else if (url === '/request.log') {
    res.statusCode = 400;
    res.end('You can´t request a "request.log" file');
  } else {
    await appendFile('/request.log', `Fecha: ${Date()}\n`, {
      encoding: 'utf-8',
    });
    await appendFile('/request.log', `Ruta: ${url}\n`, { encoding: 'utf-8' });
    //if () {
    //console.log(`File "request.log" does not exist`);
    //}
    const params = new URLSearchParams(req.url.split('?')[1]);
    console.log(url);
    params.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
    try {
      const data = await readFile('.' + url, { encoding: 'utf8' });
      res.statusCode = 200;
      //uso el método "endsWith" para que todas las peticiones terminadas en .html tengan como Content-Type = text/html
      if (url.endsWith('.html')) {
        res.setHeader('Content-Type', 'text/html');
      } else {
        res.setHeader('Content-Type', 'text/plain');
      }
      res.end(data);
    } catch (error) {
      res.statusCode = 404;
      if (url.endsWith('.html') || url === '/index' || url === '/') {
        res.setHeader('Content-Type', 'text/html');
      } else {
        res.setHeader('Content-Type', 'text/plain');
      }
      res.end('404 Not Found');
    }
  }
});

/* TAREA: Modificar el servidor actual con las siguientes condiciones:
 * responde solo GET {Done}
 * responder el archivo de la ruta y manejar errores {Done}
 * si es extension html responder con el content-type correcto sino text/plain {Done}
 * si no existe el archivo responder con 404 Not Found {Done}
 * generar un archivo requests.log donde se almacene la fecha y la ruta de la peticion (mostrar un error por consola si requests.log no existe) {no sé cómo detectar que el archivo "request.log" no existe}
 * evitar que se pueda hacer un request a requests.log {Done}
 * devolver status code adecuado SIEMPRE {Done}
 * si el path del request es / /index /index.html debe devolver index.html
 * opcional: devolver el favicon
 */

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

//¡¡¡PARA FUNCION GET!!!
// Request.method
//Contains the request's method (GET, POST, etc.)

async function existeRequest() {
  const resultado = await readFile(
    'request.log',
    { encoding: 'utf8' },
    (error, data) => {
      if (error) {
        return error.code;
      } else {
        return data;
      }
    }
  );
  return resultado;
}
