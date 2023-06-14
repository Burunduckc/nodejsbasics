import * as fs from 'node:fs'
import * as crypto from "crypto";
const calculateHash = async (filePath) => {
    const filedata = fs.readFileSync(filePath)
    const hash = crypto.createHash('sha256').update(filedata).digest('hex')
    console.log(`SHA256 hash for file ${filePath}: ${hash}`)
};

await calculateHash('src/hash/calcHash.js');