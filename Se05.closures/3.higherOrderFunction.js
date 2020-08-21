///////////////////////////////////////////////////
// Function(a,b)
///////////////////////////////////////////////////
// const giveAccessTo = (user) => 'Acess Granted to ' + name
//
// function letUserLogin(user){
//     let array = [];
//     for(let i = 0 ; i< 1000000 ; i++){
//         array.push(i)
//     }
//     return giveAccessTo(user)
// }
// console.log(letUserLogin('Adam'))

///////////////////////////////////////////////////
// Higher Order Functions
// tell it what data to user + functions
// Parameter : Not even data but also what to do 
///////////////////////////////////////////////////
const giveAccessTo = (name) => 'Acess Granted to ' + name
function authenticate(verify){
    let array = [];
    for(let i = 0 ; i< verify ; i++){
        array.push(i)
    }
    return true;
}
function sing(person){
    return 'la la la my name is ' + person.name;
}
function letPerson(person, fn){
    if(person.level === 'admin'){
        fn(5000000)
    } else if(person.level === 'user'){
        fn(1000000)
    }
    return giveAccessTo(person.name)
}
console.log(letPerson({level: 'user', name:'Tim'}, authenticate));

// Sample 1
const multiplyBy = function(num1){
    return function(num2){
        return num1 * num2
    }
}
const multiplyByTwo = multiplyBy(2)
console.log(multiplyByTwo(4))
console.log(multiplyByTwo(10))

// Sample 2
const multiplyByShort = (num1) => (num2) => num1 * num2
console.log(multiplyByShort(4)(6))