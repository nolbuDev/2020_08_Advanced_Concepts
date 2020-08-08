// Higher Function : return function
// Parameter : Not even data but also what to do 
function sing(person){
    return 'la la la my name is ' + person.name;
}

function letPerson(person, fn){
    if(person.level === 'admin'){
        return fn(person)
    } else if(person.level === 'user'){
        return fn(person)
    }
}

console.log(letPerson({level: 'user', name:'Tim'}, sing))

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

// function letUserLogin(user){

//     return giveAccessTo(user)
// }

// console.log(letUserLogin('Adam'))

// function letAdminLogin(admin){
//     let array = [];
//     for(let i = 0 ; i< 500000000 ; i++){
//         array.push(i)
//     }
//     return giveAccessTo(admin)
// }

// const giveAccessTo = (user) => 'Acess Granted to ' + name

// function authenticate(verify){
//     let array = [];
//     for(let i = 0 ; i< verify ; i++){
//         array.push(i)
//     }
//     return true;
// }
