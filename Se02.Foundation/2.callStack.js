// Callstack
function subtractTwo(num){
    return num - 3;
}

function calculate(){
    const sumTotal = 4 + 3;
    return subtractTwo(sumTotal);
}

debugger;
calculate();
