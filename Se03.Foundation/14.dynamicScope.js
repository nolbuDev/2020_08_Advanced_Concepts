const a = function(){
    console.log('a --- ',this);  // window.a()
    const b = function(){
        console.log('b ------ ',this); // window.a(b())
        const c = {
            hi: function(){
                console.log('c --------- ',this);
            }
        }
        c.hi();
    }
    b();
}

a();

// issue
const obj = {
    name: 'Billy',
    sing() {
        console.log('sing', this);
        const anotherFunc = function(){
            console.log('anotherFunc: ', this);  // Global Object
        }
        anotherFunc();
    }
}
obj.sing();

// solution 1
const obj = {
    name: 'Billy',
    sing() {
        console.log('sing', this);
        const anotherFunc = () => {
            console.log('anotherFunc: ', this);
        }
        anotherFunc();
    }
}
obj.sing();

// solution 2
const obj = {
    name: 'Billy',
    sing() {
        console.log('sing', this);
        const anotherFunc = function(){
            console.log('anotherFunc: ', this);
        }
        return anotherFunc.bind(this);
    }
}
obj.sing()();

// solution 3
const obj = {
    name: 'Billy',
    sing() {
        console.log('sing', this);
        const self = this
        const anotherFunc = function(){
            console.log('anotherFunc: ', self);
        }
        anotherFunc();
    }
}
obj.sing();
