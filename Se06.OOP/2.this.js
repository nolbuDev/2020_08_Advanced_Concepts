// new binding this
function Person(name, age){
    this.name = name;
    this.age = age;
}

const person1 = new Person('Xavier', 55)

// implict binding
const person = {
    name: 'Karen',
    age: 40,
    hi() {
        console.log('hi ' + this.name)
    }
}

// explict binding
const person3 = {
    name: 'Karen',
    age:40,
    hi: function() {
        console.log('hi ' + this.setTimeout)
    }.bind(window)
}
person3.hi();

// arrow function
const person4 = {
    name: 'Karen',
    age: 40,
    hi: function() {
        var inner = () => {
            console.log('hi ' + this.name)
        }
        return inner();
    }
}
person4.hi();

//Test
// each context
function a(){ b(); }
function b(){ c(); }
function c(){ console.log(this); }
a(); //

// One context
function a() {
    return function b() {
        return function c(){
            console.log(this);
        }
    }
}
a();