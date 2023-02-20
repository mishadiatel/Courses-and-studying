import { configureStore } from "@reduxjs/toolkit";


import counterReducer from "./counter";
import authReduser from './auth'



const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReduser,
    }
});

export default store;

// import { createStore } from "@reduxjs/toolkit";
// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter,
//         };
//     }

//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter,
//         }
//     }

//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter,
//         }
//     }
//     if (action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter,
//         }
//     }

//     return state;
// }

// const store = createStore(counterReducer);