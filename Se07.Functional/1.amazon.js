// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}
let amazonHistory = [];
// 1.
//purchaseItem(user, {name:'laptop', price:344})

//const item ={name:'laptop', price:200}
const compose = (f, g) => (...args) => f(g(...args));
const result = purchaseItem(
                    emptyCart,
                    buyItem,
                    applyTaxToItems,
                    addItemToCart
                )(user, {name:'laptop', price:200})
console.log(result)
// function purchaseItem(user, item) {
//     return Object.assign({}, user, {purchases:item})
// }
function purchaseItem(...fns) {
    return fns.reduce(compose)
}

function addItemToCart(user, item) {
    amazonHistory.push(user)
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, {cart:updateCart})
}

function applyTaxToItems(user){
    amazonHistory.push(user)
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price*taxRate
        }
    })
    return Object.assign({}, user, {cart:updatedCart});
    // return user;
}

function buyItem(user){
    amazonHistory.push(user)
    return Object.assign({}, user, {purchases:user.cart});
}

function emptyCart(user){
    amazonHistory.push(user)
    return Object.assign({}, user, {cart:[]});
}

// Implement a cart feature:
// 1. Add items to cart
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empyt cart

// Bonus:
// accept refunds.
// track user history.

function refundItem(){

}