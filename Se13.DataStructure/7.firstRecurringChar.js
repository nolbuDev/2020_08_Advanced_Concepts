//Given an array = [2,5,1,2,3,5,1,2,4];
// It should return 2

//Gvien an array = [2,1,1,2,3,5,1,2,3];
// It should return 1

//Gvien an array = [2,3,4,5];
// It should return undefined

function firstRecurringChar(arr){
    let result = new Map();
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i + 1 ; j < arr.length ; j++){
            if(arr[i] === arr[j]){
                result.set(j,arr[i]);
                break;
            }
        }
    }
    if(result.size) {
        return result.get(Array.from(result.keys()).sort()[0]);
    } else {
        return undefined;
    }
}

//console.log(firstRecurringChar([2,5,1,2,3,5,1,2,4]));
//console.log(firstRecurringChar([2,1,1,2,3,5,1,2,3]));
//console.log(firstRecurringChar([2,3,4,5]));

function firstRecurringCharacter(input){
    for(let i = 0 ; i < input.length ; i++){
        for(let j = i + 1 ; j < input.length ; j++){
            if(input[i] === input[j]){
                return input[i];
            }
        }
    }
    return undefined;
}

function firstRecurringCharacter2(input){
    let map = {};
    for(let i=0; i<input.length; i++){
        console.log('first',i, map[input[i]]);
        if(map[input[i]] !== undefined){
            return input[i]
        } else {
            map[input[i]] = i;
        }
        console.log(map);
    }
    return undefined;
}

console.log(firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]));
//console.log(firstRecurringCharacter2([2,1,1,2,3,5,1,2,3]));
//console.log(firstRecurringCharacter2([2,3,4,5]));