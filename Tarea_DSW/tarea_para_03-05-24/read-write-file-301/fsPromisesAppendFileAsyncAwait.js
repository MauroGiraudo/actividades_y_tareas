import { appendFile, readFile } from 'fs/promises';

let str = '\nHeiter;Priest';
try {
  await appendFile('data.txt', str, { encoding: 'utf-8' });
  console.log('File appended. Showing appended file...');
  const data = await readFile('data.txt', { encoding: 'utf-8' });
  console.log(data);
} catch (error) {
  console.log(`Error detected: ${error}`);
} finally {
  console.log('End of the file!');
}
