import { appendFile, readFile } from 'fs/promises';

let str = '\nHeiter;Priest';
appendFile('data.txt', str, { encoding: 'utf-8' });
console.log('Showing appended file...');
readFile('data.txt', { encoding: 'utf-8' })
  .then((datos) => console.log(datos))
  .then(() => console.log('End of the file!'))
  .catch((error) => console.log(`Error: ${error}`));
