// Parallel, Sequencial, Race
const promisify = (item, delay) => new Promise((resolve) => setTimeout(() => resolve(item), delay));

const a = () => promisify('a', 5000);
const b = () => promisify('b', 10);
const c = () => promisify('c', 3000);

//parallel
async function parallel(){
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.all(promises);
    return `Parallel is done: ${output1}, ${output2}, ${output3}`;
}

//race
async function race(){
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.race(promises);
    return `Race is done: ${output1}, ${output2}, ${output3}`;
}

//Sequence
async function sequence(){
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();
    return `Sequence is done: ${output1}, ${output2}, ${output3}`;
}

parallel().then(console.log);
race().then(console.log);
sequence().then(console.log)
