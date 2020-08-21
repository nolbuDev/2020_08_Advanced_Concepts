Promise.resolve('asyncfail')
    .then(response => {
        //throw new Error('#1 fail')
        Promise.resolve().then(() => {
            throw new Error('Nested Error')
        }).catch(console.log)
        console.log('1st then', response)
        return response
    })
    .then(response => {
        console.log('2nd then', response)
        return response
    })
    .then(response => {
        console.log('3rd then', response)
    })
    .catch(err => {
        console.log('final error')
    })
    .finally (() => {
        console.log('final')
    })


Promise.resolve('asyncfail')
    .then(response => {
        console.log('1st then', response)
        throw new Error('#1 fail')
        return response
    })
    .then(response => {
        console.log('2nd then', response)
        return response
    })
    .then(response => {
        console.log('3rd then', response)
    })
    .catch(err => {
        console.log('final error')
    })
    .finally (() => {
        console.log('final')
    })