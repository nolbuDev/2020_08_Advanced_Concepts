// 1. Copy and paste code to create objects
const elf = {
    name: 'Orwell',
    weapon: 'bow',
    attack() {
        return 'attack with ' + elf.weapon;
    }
}

elf.attack();

// 2. factory functions
// Weak Point : Function is copyed to each object.
function createElf(name, weapon){
    return {
        name,
        weapon,
        attack(){
            return 'attack with ' + weapon;
        }
    }
}

const peter = createElf('Peter', 'stones')
const sam = createElf('Sam', 'fire')

// 3. Properties function and Function are created
//    and then are assigned each
const elfFunctions = {
    attack(){
        return 'attack with ' + this.weapon;
    }    
}

function createElf(name, weapon){
    return {
        name,
        weapon,
    }
}

const peter = createElf('Peter', 'stones');
peter.attack = elfFunctions.attack;
const sam = createElf('Sam', 'fire');
sam.attack = elfFunctions.attack;

// 4. Object.create()
const elfFunctions = {
    attack(){
        return 'attack with ' + this.weapon;
    }    
}

function createElf(name, weapon){
    let newElf = Object.create(elfFunctions)
    console.log(newElf.__proto__);
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

const peter = createElf('Peter', 'stones');
console.log(peter.attack());
const sam = createElf('Sam', 'fire');
console.log(sam.attack());

// 5. Constructo Functions
// new : this is created
function Elf(name, weapon){
    this.name = name;
    this.weapon = weapon;
}

// Function Declaration is Dynamicl Scope, So it works
Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon;
}

// Arrow Function is Lexical Scope, So it doesn't work
Elf.prototype.attack = () => {
    return 'attack with ' + this.weapon;
}

const peter = new Elf('Peter', 'stones');
const sam = new Elf('Sam', 'fire');

// Other Sample.
const self1 = new Function('name', 'weapon', `this.name = name;
this.weapon = weapon;`);
const son = new self1('nolbu', 'Fire');

//6. More Constructors Functions
function Elf(name, weapon){
    console.log('this', this);
    this.name = name;
    this.weapon = weapon;
    var a = 5;                   // this variable a is not included
    console.log('this', this);
}

// Function Declaration is Dynamicl Scope, So it works
Elf.prototype.attack = function() {
    return 'attack with ' + this.weapon;
}

// It is not undefined : because of this
Elf.prototype.build = function(){
    function building(){
        return this.name + ' builds a house';
    }
    return building();
}

// Solution 1
Elf.prototype.build = function(){
    function building(){
        return this.name + ' builds a house';
    }
    return building.bind(this);
}

const peter = new Elf('Peter', 'stones');
console.log(peter.build()())

// Solution 2
Elf.prototype.build = function(){
    const self = this;
    function building(){
        return self.name + ' builds a house';
    }
    return building();
}

const peter = new Elf('Peter', 'stones');
console.log(peter.build())

// ES6 Class
class Elf{
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
    }

    attack(){
        return 'attack with ' + this.weapon
    }
}

const peter = new Elf('Peter', 'stones');
console.log(peter.attack());
console.log(peter instanceof Elf)


