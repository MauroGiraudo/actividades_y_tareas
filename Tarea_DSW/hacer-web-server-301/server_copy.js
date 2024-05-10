import http from 'node:http';
import { readFile } from 'node:fs/promises';
const port = 3000;

const server = http.createServer(async (req, res) => {
  const url = req.url.split('?')[0];
  const params = new URLSearchParams(req.url.split('?')[1]);
  console.log(url);
  params.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
  try {
    const data = await readFile('.' + url, { encoding: 'utf8' });
    res.statusCode = 200;
    if (req.headers['content-type'] === 'text/html') {
      res.setHeader('Content-Type', 'text/html');
    } else {
      res.setHeader('Content-Type', 'text/plain');
    }
    res.end(data);
  } catch (error) {
    res.statusCode = 404;
    if (req.headers['content-type'] === 'text/html') {
      res.setHeader('Content-Type', 'text/html');
    } else {
      res.setHeader('Content-Type', 'text/plain');
    }
    res.end('404 Not Found');
  }
});

/* TAREA: Modificar el servidor actual con las siguientes condiciones:
 * responde solo GET (ultimo)
 * responder el archivo de la ruta y manejar errores {Done}
 * si es extension html responder con el content-type correcto sino text/plain {Done}
 * si no existe el archivo responder con 404 Not Found {Done}
 * generar un archivo requests.log donde se almacene la fecha y la ruta de la peticion (mostrar un error por consola si requests.log no existe)
 * evitar que se pueda hacer un request a requests.log
 * devolver status code adecuado SIEMPRE
 * si el path del request es / /index /index.html debe devolver index.html
 * opcional: devolver el favicon
 */

server.listen(port, () => {
  console.log(`URL: `);
  console.log(`Server running at http://localhost:${port}/`);
});
