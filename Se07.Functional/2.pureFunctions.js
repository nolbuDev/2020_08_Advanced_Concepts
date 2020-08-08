// Pure Functions
// 1. no side effects
// 2. input --> output

// Side Effects : Variable is change after function
const array = [1,2,3];
function mutateArray(arr){
    arr.pop()
}
function mutateArray2(arr){
    arr.forEach(item => {
        arr.push(1)
    })
}

mutateArray(array);
mutateArray2(array);
console.log(array);

// no side effects
function removeLastItem(arr){
    const newArray = [].concat(arr);
    newArray.pop();
    return newArray;
}

function multiplyBy2(arr){
    return arr.map(item => item*2)
}
console.log(removeLastItem(array));
console.log(array)