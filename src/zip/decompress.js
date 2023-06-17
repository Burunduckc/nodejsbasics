import * as zlib from 'node:zlib'
import * as fs from 'node:fs'
//Function
const decompress = async (urlToMyArchive, urlToMyFile) => {
    //Streams
    const myArchive = fs.createReadStream(urlToMyArchive)
    const output = fs.createWriteStream(urlToMyFile)
    //Zlib
    const unzip = zlib.createGunzip()
    //Pipe
    myArchive.pipe(unzip).pipe(output)
    myArchive.on('error', () => {
        throw new Error('miss archive')
    })
    output.on('finish', () => {
        console.log('All is okay')
    })
};

await decompress('src/zip/archive.txt.gz', 'src/zip/files/fileToCompress.txt');