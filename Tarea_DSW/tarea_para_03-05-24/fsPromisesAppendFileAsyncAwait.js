import { appendFile, readFile } from 'fs/promises';

let str = '\nDr_Ratio;Hunt';
try {
  await appendFile('data2.txt', str, { encoding: 'utf-8' });
  console.log('File appended. Showing appended file...');
  const data = await readFile('data2.txt', { encoding: 'utf-8' });
  console.log(data);
} catch (error) {
  console.log(`Error detected: ${error}`);
} finally {
  console.log('End of the file!');
}
