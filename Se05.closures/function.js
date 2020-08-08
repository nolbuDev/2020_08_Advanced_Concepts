// call function 1
const one = function (){
    return 1;
}
one()

// call function 2
// Object method
const obj = {
    two: function() {
        return 2;
    }
}
obj.two()

// Call function 3
// as a object
function three(){
    return 3;
}
three.call()

// Call function 4
// as a object using constructor with Function
const four = new Function('num', 'return num')
four();

function woohoo() {
    console.log('woohoo')
}
woohoo.yell = 'ahhhhhh'