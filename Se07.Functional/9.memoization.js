function addTo80(n){
    return n + 80;
}

addTo80(5);
addTo80(5);
addTo80(5);

let cache = {
};
function memorizedAddTo80(n){
    if(n in cache)  {// == cache.n
        return cache[n];
    } else {
        console.log('long time')
        cache[n] = n +80;
        return cache[n];
    }
}
console.log('1', memorizedAddTo80(5));
console.log('2', memorizedAddTo80(5));

// Improve
function memorizedAddToImprove80(){
    let cache = {};
    
    return function(n) {
        if(n in cache)  {// == cache.n
            return cache[n];
        } else {
            console.log('long time')
            cache[n] = n +80;
            return cache[n];
        }
    }
}
const memorized = memorizedAddToImprove80()
console.log('1', memorized(5));
console.log('2', memorized(5));