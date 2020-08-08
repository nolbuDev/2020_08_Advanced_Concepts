// Higher Order Functions
// It either takes one or more functions as arguments or returns a function as a result often called a callback.
const hof = () => () => 5;
hof()();

const hof2 = (fn) => fn();
hof2(function(){ return 5;})

// Closure
const closure = function() {
    let count = 0;
    return function increment() {
        count++;
    }
}
const incrementFn = closure();
incrementFn();