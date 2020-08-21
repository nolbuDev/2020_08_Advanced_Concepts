//Object 
// 받아 놓고 사용해야 한다.
// 직접 사용시 Error 발생
const animals = {
    tiger:23,
    lion:5,
    monkey:2,
    bird:4
}
const{tiger,lion,...anyname} = animals;
console.log(typeof tiger)

function objectSpread(p1,p2,p3){
    console.log(p1);
    console.log(p2);
    console.log(p3);
}

objectSpread(tiger, lion, anyname);

// Array
const array = [1,2,3,4,5]
function sum(a,b,c,d,e){
    return a+b+c+d+e;
}
sum(...array)