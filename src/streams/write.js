import * as fs from "node:fs";

const write = async (url, str) => {
    const writeFile = fs.createWriteStream(url, 'utf-8')
    writeFile.write(str)
    writeFile.end()
    process.stdin.pipe(writeFile)
    writeFile.on('finish', () => {
        console.log('Data written to file')
    })
    writeFile.on('error', () => {
        console.log('Error: file no written')
    })
};

await write('src/streams/files/fileToWrite.txt', 'Hello!');