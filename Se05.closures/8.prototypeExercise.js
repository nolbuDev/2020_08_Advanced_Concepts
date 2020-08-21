//Exercise - extend the functionality of a built in object

//1. Data Object => to have new method .lastYear() wich shows you last year 'YYYY' format.
Date.prototype.lastYear = function() { 
    return this.getFullYear() -1;
}
new Date('1900-10-10').lastYear();

//2. Modify .map() to print 'im' at the end of each item.
Array.prototype.map = function(){
    let arr = [];
    for(let i = 0 ; i < this.length ; i++){
        arr.push(this[i] + 'II');
    }
    return arr;
}
console.log([1,2,3].map())