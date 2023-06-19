import { parentPort, workerData } from 'worker_threads';
// n should be received from main thread
const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    const result = nthFibonacci(workerData);
    const status = result !== undefined ? 'resolved' : 'error';
    parentPort.postMessage({ status, data: result });
};

sendResult();