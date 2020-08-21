// ES6 Class
// class Elf{
//     constructor(name, weapon){
//         this.name = name;
//         this.weapon = weapon;
//     }

//     attack(){
//         return 'attack with ' + this.weapon
//     }
// }

// const fiona = new Elf('Fiona', 'ninja stars');
// const ogre = {...fiona};
// ogre.__proto__;
// console.log(fiona === ogre);
// ogre.attack();

// Solution
class Character{
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
    }

    attack(){
        return 'attack with ' + this.weapon
    }
}

class Elf extends Character {
    constructor(name, weapon, type){
        //console.log(this);      // not working
        super(name, weapon);
        this.type = type;
        console.log(this);
    }
}
const fiona = new Elf('Fiona', 'ninja stars', 'castle');
fiona
const dolby = new Elf('Dolby', 'cloth', 'house');
dolby

class Ogre extends Character {
    constructor(name, weapon, color){
        super(name, weapon);
        this.color = color;
    }
    makeFort(){
        return 'strongest fort in the world made';
    }
}

const shrek = new Ogre('Shrek', 'club', 'green')
shrek.makeFort();
console.log(Ogre.isPrototypeOf(shrek));
console.log(Ogre.prototype.isPrototypeOf(shrek));
console.log(Character.prototype.isPrototypeOf(Orge));
console.log(dolby instanceof Elf);
console.log(dolby instanceof Character);


