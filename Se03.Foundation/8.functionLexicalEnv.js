function sayMyName(){
    var a = 'a';
    return function findName(){
        var b = 'b';
        console.log(a);
        return function printName(){
            var c = 'c';
            return 'Nolbu';
        }
    }
}

sayMyName()()();