class authenticationError extends Error{
    constructor(message){
        super(message);
        this.name = 'authenticationError';
        this.favouriteSnack = 'grapes';
    }
}

const a = new authenticationError('oopsie');
console.log(a.favouriteSnack);
throw a;