// Currying
const multiply = (a,b) => a*b;
multiply(3,4)
const curriedMultiply = (a) => (b) => a*b;
curriedMultiply(5)(3)

//Usage
const curriedMultiply5 = curriedMultiply(5)
curriedMultiply5(10);
