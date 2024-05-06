import { readFile } from 'fs/promises';

console.log('Start reading a file...');
readFile('data.txt', { encoding: 'utf8' })
  .then((data) => console.log(data))
  .then(() => console.log('End of the file!'))
  .catch((error) => console.log(`Error: ${error}`));
