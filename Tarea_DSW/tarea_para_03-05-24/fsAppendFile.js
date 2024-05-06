import fs from 'node:fs';

let str = '\nLuocha;Abundance';

console.log('Appending file...');
fs.appendFile('data2.txt', str, { encoding: 'utf-8' }, errorManagement);
fs.readFile('data2.txt', { encoding: 'utf-8' }, errorManagement2);

function errorManagement(error) {
  if (error) {
    console.log(`Error detected: ${error}`);
  } else {
    console.log(`File appended. Showing appended file...`);
  }
}

function errorManagement2(error, data) {
  if (error) {
    console.log(`Error detected: ${error}`);
  } else {
    console.log(data);
  }
  console.log('End of the file!');
}

//Preguntar cómo puedo utilizar una función definida en un archivo dentro de otro archivo.
