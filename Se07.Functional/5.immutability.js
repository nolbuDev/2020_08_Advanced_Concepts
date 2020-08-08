// Immutability
const obj = {name: 'nolbu'};
function clone(obj){
    return {...obj}; // this is pure.
}
obj.name = 'Nana'

function updateName(obj){
    const obj2 = clone(obj);
    obj2.name = 'Nana'
    return obj2;
}
updateName(obj);
console.log(obj);