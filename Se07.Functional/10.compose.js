// Compose
// data --> fn --> data --> fn
// compose(fn1, fn2, fn3)(50) :  Right to Left
// fn1(fn2(fn3(50)))
const compose = (f, g) => (data) => f(g(data));
const multiplyBy3 = (num) => num*3;
const makePositive = (num) => Math.abs(num) 
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

console.log(multiplyBy3AndAbsolute(-50))

// Pipe
// pipe(fn1, fn2, fn3)(50) : Left to Right
// fn3(fn2(fn1(50)))
const pipe = (f, g) => (data) => g(f(data));


