import { appendFileSync, readFileSync } from 'node:fs';
let str = '\nJade;Erudition';
appendFileSync('data2.txt', str, { encoding: 'utf-8' });
console.log('File appended. Showing appended file...');
const data = readFileSync('data2.txt', { encoding: 'utf-8' });
console.log(data);
console.log('End of the file!');
