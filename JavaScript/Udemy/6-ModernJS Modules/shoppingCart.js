
console.log('Exporting module');

//block code
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching users');


const shippingCost = 10;
const cart = [];

export const addToCart = function(product, quantity){
    cart.push({product, quantity});
    console.log(`${product} ${quantity} added to cart`);
}

const totalPrice = 237;
const totalQuantity = 23;

export {totalPrice, totalQuantity as tq};

export default function(product, quantity){
    cart.push({product, quantity});
    console.log(`${product} ${quantity} added to cart`);
}