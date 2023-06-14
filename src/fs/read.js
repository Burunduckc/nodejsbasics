import * as fs from 'node:fs'

const read = async () => {
    const urlFileRead = 'src/fs/files/fileToRead.txt'
    fs.access(urlFileRead, (err)=>{
        if (err){
            throw new Error(`FS operation failed: file (${urlFileRead}) missing`)
        } else{
            let read = fs.readFileSync(urlFileRead, 'utf8')
            console.log(read)
        }
    })
}

await read()