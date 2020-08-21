// Assignment
let view;
function initialize(){
    view = 'view';
    console.log('view has been set!');
}

initialize();
initialize();
initialize();
console.log(view);

// Solution
let viewSolution;
function initializeSolution(){
    let called = 0;
    return function(){
        if(called > 0){
            return;
        } else {
            called++;
            viewSolution = 'view';
            console.log('view Solution', 'view has been set!');
        }
    }
}

const startOnce = initializeSolution();
startOnce();
startOnce();
startOnce();
console.log('view solution');

// Exercise
const array = [1,2,3,4]
for(var i=0; i<array.length; i++){
    setTimeout(function(){
        console.log('I am at index ' + i);
    }, 3000)
}

// Solution 1 var => let : block scope
for(let j=0; j<array.length; j++){
    setTimeout(function(){
        console.log('I am at index ' + j);
    }, 3000);
}

// Solution 2 : Using closure, to pass paramters
for(var k=0; k<array.length; k++){
    (function(closureI){
        setTimeout(function(){
            console.log('I am at index ' + closureI);
        }, 3000);
    })(k)
}
