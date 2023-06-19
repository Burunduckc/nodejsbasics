import {spawn} from 'node:child_process'
const spawnChildProcess = (args) => spawn('node', ['./src/cp/files/script.js', ...args], { stdio: ['pipe', 'pipe', process.stdout] }).stdin.pipe(process.stdin);

// Put your arguments in function call to test this functionality
await spawnChildProcess('dsalkd', ['kdkdsa']);
