import { Worker, isMainThread } from 'worker_threads';
import os from 'os';

const createWorkerThread = (workerData) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./src/wt/worker.js', { workerData });

        worker.on('message', (result) => {
            resolve(result);
        });

        worker.on('error', (error) => {
            reject(error);
        });
    });
};

const performCalculations = async () => {
    if (isMainThread) {
        const numCores = os.cpus().length;
        const workerDataArray = Array.from({ length: numCores }, (_, index) => index + 10);
        const workerPromises = workerDataArray.map((workerData) => createWorkerThread(workerData));
        const results = await Promise.all(workerPromises);
        console.log(results);
    }
};

await performCalculations();