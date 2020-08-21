// Functions are first class citizens in JS
// 1. Function can be assigned to variable
var stuff = function(){}

//2. it can be arguments
function a(fn){
    fn()
} 
a(function() {console.log('hi there')})

//3. it can be returned
function b() {
    return function c() { console.log('bye')}
}
b()()
var d = b()
d()
