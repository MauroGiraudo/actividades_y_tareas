import { appendFileSync, readFileSync } from 'node:fs';
let str = '\nHeiter;Priest';
appendFileSync('data.txt', str, { encoding: 'utf-8' });
console.log('File appended. Showing appended file...');
const data = readFileSync('data.txt', { encoding: 'utf-8' });
console.log(data);
console.log('End of the file!');
