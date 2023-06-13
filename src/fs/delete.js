import * as fs from 'node:fs'

const remove = async () => {
    const urlFile = 'src/fs/files/fileToRemove.txt'
    fs.access(urlFile, (error)=>{
        if (error){
            throw new Error('FS operation failed')
        } else{
            fs.unlink(urlFile, ()=>{
                console.log('File deleted')
            })
        }
    })
};

await remove();