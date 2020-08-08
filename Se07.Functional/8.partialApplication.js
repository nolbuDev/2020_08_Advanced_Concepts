// Partial Application
const multiply = (a,b,c) => a*b*c;
multiply(3,4)

const curriedMultiply = (a) => (b) => (c) => a*b*c;
curriedMultiply(5)(3)(4)

const partialMultiplyBy5 = multiply.bind(null, 5)
partialMultiplyBy5(4, 10)