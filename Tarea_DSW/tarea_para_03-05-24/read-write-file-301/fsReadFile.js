//const fs = require('node:fs')
import fs from 'node:fs';
//import { readFile } from 'node:fs';

console.log('Start reading a file...');
fs.readFile(
  'read-write-file-301/data.txt',
  { encoding: 'utf8' },
  errorManagement
);

function errorManagement(err, data) {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(data);
  }
  console.log('End of the file!');
}

//(err, data) => {
//  if (error) {
//    console.log(`Error: ${error}`);
//  } else {
//    console.log(dataInTheFile);
//  }
//  console.log('End of the file!');
//};
