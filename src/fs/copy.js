import * as fs from 'node:fs'

const copy = async (dir, dest) => {
    fs.stat(dir, err => {
        if (err){
            throw new Error('папки нету')
        }
    })
    fs.stat(dest, err => {
        if (!err){
            throw new Error('FS operation failed')
        } else {
            fs.mkdir(dest, () => {})
            fs.readdir(dir, (err, filesFolders)=>{
                    filesFolders.forEach(file=>{
                        console.log(file)
                        fs.copyFileSync(`${dir}/${file}`, `${dest}/${file}`)
                    })
            })
        }
    })

};

copy('src/fs/files', 'src/fs/files_copy');
