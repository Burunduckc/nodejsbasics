import * as fs from 'node:fs'

const rename = async () => {
    fs.access('src/fs/files/properFilename.md', err=>{
        if (!err) throw new Error('FS operation failed')
    })
    fs.access('src/fs/files/wrongFilename.txt', err=>{
        if(err) {
            throw new Error('FS operation failed')
        } else {
            fs.renameSync('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md')
        }
    })

}

await rename()