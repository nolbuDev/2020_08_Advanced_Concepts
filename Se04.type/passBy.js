var a = 5;
var b = a;

b++;

console.log(a)
console.log(b)

let obj1 = {name: 'Yao', password: '123'}
let obj2 = obj1

obj2.password = 'easypeasy'

console.log(obj1)
console.log(obj2)

// Clone, Spread
let obj = {a:'a', b:'b', c:'c'}
let clone = Object.assign({}, obj)      // Clone
let clone2 = {...obj}                   // Spread
obj.c = 5;

console.log(obj)
console.log(clone)
console.log(clone2)

// Object member, Shallow Cloning
let objMem = {a:'a', b:'b', c:{ deep: 'try and copy me'}}
let cloneMem = Object.assign({}, obj)      // Clone
let cloneMem2 = {...obj}                   // Spread
let superClone = JSON.parse(JSON.stringify(objMem));    // Deep Cloning : Using JSON
objMem.c = 5;

console.log(objMem)
console.log(cloneMem)
console.log(cloneMem2)
console.log(superClone)

// Exercise
var user1 = {name:"nerd", org:"dev"}
var user2 = {name:"nerd", org:"dev"}
var eq = user1 == user2;
console.log(eq)

