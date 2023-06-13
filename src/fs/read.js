import * as fs from 'node:fs'

const read = async () => {
    fs.access('src/fs/files/fileToRead.txt', (err)=>{
        if (err){
            throw new Error('FS operation failed')
        } else{
            let read = fs.readFileSync('src/fs/files/fileToRead.txt', 'utf8')
            console.log(read)
        }
    })
}

await read()