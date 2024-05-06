import { readFile } from 'fs/promises'

try {
  console.log('Start reading a file...')
  const data = await readFile('./data.txt', { encoding: 'utf8' })
  console.log(data)
} catch (error) {
  console.log(`Error: ${error}`)
} finally {
  console.log('End of the file!')
}
