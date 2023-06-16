import * as fs from 'node:fs'
const read = async (urlToFile) => {
    const readbleStream = fs.createReadStream(urlToFile, 'utf-8')

    readbleStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    })
    readbleStream.on('end', () => {
        console.log('. File read: Operation successful')
    })
    readbleStream.on('error', () => {
        throw new Error('Operation failed: missing file or uncorrect url to file')
    })
};

await read('src/streams/files/fileToRead.txt');