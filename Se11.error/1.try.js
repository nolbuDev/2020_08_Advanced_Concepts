function fail(){
    try{
        console.log('this works');
        throw new Error('oopsie!!!');
    } catch (error){
        console.log(error.name)
        console.log(error.message)
        console.log(error.stack)
        console.log('we have made an oppsie', error)
    } finally {
        console.log('still good')
        return 'returning fail';
    }
}

fail();