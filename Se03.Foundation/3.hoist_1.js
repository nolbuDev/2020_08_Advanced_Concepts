
console.log('1',one);
var one = 1;
console.log('2',one);
var one = 2;
console.log('3',one);

console.log('1--------', a());
function a() {
    return 'hi';
}
console.log('2--------', a());
function a() {
    return 'bye';
}
console.log('3--------', a());
