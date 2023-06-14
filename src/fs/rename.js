import * as fs from 'node:fs'

const rename = async () => {
    const correctFile = 'src/fs/files/properFilename.md'
    const wrongFile = 'src/fs/files/wrongFilename.txt'
    fs.access(correctFile, err=>{
        if (!err) throw new Error(`FS operation failed: File (${correctFile}) now exists`)
    })
    fs.access(wrongFile, err=>{
        if(err) {
            throw new Error(`FS operation failed: File (${wrongFile}) missing`)
        } else {
            fs.renameSync('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md')
        }
    })

}

await rename()