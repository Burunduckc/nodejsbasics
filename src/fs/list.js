import * as fs from 'node:fs';

export const list = async (folderr) => {
    fs.access(folderr, (err)=>{
        if (err){
            throw new Error(`FS operation failed: folder (${folderr}) missing`)
        } else {
            fs.readdir(folderr, (err, filesFolders)=>{
                filesFolders.forEach(file=>{
                    console.log(file)
                })
            })
        }
    })
};
await list('src/fs/files')