// Create a function that reverses a String
// 'Hi My name is Nolbu'

function reverse(str){
    const temp = str.split("");
    let reverseString = '';
    for(let i = temp.length-1 ; i > -1 ; i--){
        reverseString += temp[i];
    }
    return reverseString;
}

console.log( reverse('Hi My Name is Nolbu'));

function reverseTeacher(str){
    // check input
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'hmmm that is not good';
    }

    const backwards = [];
    const totalItems = str.length -1;
    for(let i = totalItems ; i >= 0 ; i --){
        backwards.push(str[i]);
    }
    return backwards.join('');
}

function reverseTwo(str){
    // check input
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'hmmm that is not good';
    }

    return str.split('').reverse().join('')
}

const reverseThree = str => str.split('').reverse().join('')

const reverseThree = str => [...str].reverse().join('')
