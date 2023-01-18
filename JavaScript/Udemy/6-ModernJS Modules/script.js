// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
// addToCart('bread', 5);

// import shoppingCart from "./shoppingCart.js";

// console.log(price, tq);
// console.log('Importing module');

import * as ShoppingCart from './shoppingCart.js'
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);

// import add from './shoppingCart.js'
// add('pizza', 2);

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// const getLastPost = async function(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();
//     // console.log(data)
//     return {title: data.at(-1).title, text: data.at(-1).body};
// }

// const lastPost = getLastPost();
// console.log(lastPost);

// not clean
// lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);


// const ShoppingCart2 = (function () {
//     const cart = [];
//     const shippingCost = 10;
//     const totalPrice = 237;
//     const totalQuantity = 23;
//     const addToCart = function (product, quantity) {
//       cart.push({ product, quantity });
//       console.log(
//         `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
//       );
//     };
//     const orderStock = function (product, quantity) {
//       console.log(`${quantity} ${product} ordered from supplier`);
//     };
//     return {
//       addToCart,
//       cart,
//       totalPrice,
//       totalQuantity,
//     };
// })();
// 
// ShoppingCart2.addToCart('apples', 4);
// ShoppingCart2.addToCart('pizza', 2);

// export.addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart (sipping cost is ${shippingCost})`);
// };
// 
// const {addToCart} = require('./shoppingCart.js');

// import  cloneDeep  from "./node_modules/lodash-es/cloneDeep.js";
import  cloneDeep  from "lodash-es";
// import  cloneDeep  from "lodash";

const state = {
    cart: [
        {product: 'bread', quantity: 5},
        {product: 'pizza', quantity: 5},
    ],
    user: {logedIn: true},
}

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.logedIn = false;

console.log(stateClone);
console.log(stateDeepClone)

if(module.hot){
    module.hot.accept();
}

// class Person {
//     #greeting = 'Hey';
//     constructor(name){
//         this.name = name;
//         console.log(`${this.#greeting} ${this.name}`);
//     }
// }
// const jonas = new Person('Jonas');

import 'core-js/stable';

import 'regenerator-runtime/runtime';