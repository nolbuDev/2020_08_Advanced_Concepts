function b(){
    'use strict'
    console.log(this)
}

b(); // undefined

const obj = {
    name: 'Billy',
    sing: function() {
        return 'lalala ' + this.name;
    },
    singAgain() {
        return this.sing() + '!';
    }
}

console.log(obj.singAgain());


// we can avoid repetive code using this.
function importantPerson() {
    console.log(this.name);
}
importantPerson();
const name = 'Sunny';
const obj1 = {
    name: 'Cassy',
    importantPerson: importantPerson
}
const obj2 = {
    name: 'Jacob',
    importantPerson: importantPerson
}

importantPerson();
obj1.importantPerson();
obj2.importantPerson();
