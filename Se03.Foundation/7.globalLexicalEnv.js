var x = 'x';
function findName(){
    console.log(x);
    var b = 'b';
    return printName();
}

function printName(){
    var c = 'c';
    return 'Nolbu';
}


function sayMyName(){
    var a = 'a';
    return findName();
}

sayMyName();