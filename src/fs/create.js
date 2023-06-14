import * as fs from 'node:fs';

const create = async () => {
    const urlFile = 'src/fs/files/fresh.txt'
    fs.stat(urlFile,(error, stat)=>{
        if(error){
            fs.writeFile(urlFile, 'I am fresh and young', (err)=>{
                if (err) {
                    throw new Error('Error')
                } else{
                    console.log('An asynchronous check of your file has occurred. File contents:')
                    console.log(fs.readFileSync('src/fs/files/fresh.txt', 'utf8'))
                }
            })
        } else {
            throw new Error(`FS operation failed: File (${urlFile}) now exists`)
        }
    })
};

await create();