import * as zlib from 'node:zlib'
import * as fs from 'node:fs'

const compress = async (urlToFile, urlLocateZip) => {
    const gzip = zlib.createGzip();
    const readMyFile = fs.createReadStream(urlToFile);
    const writeMyArchive = fs.createWriteStream(urlLocateZip);
    readMyFile.pipe(gzip).pipe(writeMyArchive);
    readMyFile.on('error', (err) => {
        throw new Error('miss file')
    })
};

await compress('src/zip/files/fileToCompress.txt', 'src/zip/archive.txt.gz');