(async function() {
    try{
        await Promise.resolve('cool')
        await Promise.reject('oopsie')
    } catch(err){
        console.log(err)
    }
    console.log('is this still good?')
})()