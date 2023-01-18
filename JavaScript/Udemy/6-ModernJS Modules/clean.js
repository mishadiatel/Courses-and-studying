'strict mode';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
// spendingLimits.jay = 200;

const getLimit = (limits, user) => limits?.[user] ?? 0;

const addExpence = function (state, limits, value, description, user='jonas') {
  const cleanUser = user.toLowerCase();
  return (value <= getLimit(limits, cleanUser)) ? [...state, { value: -value, description, user: cleanUser }] : state;
    // budget.push({ value: -value, description, user: cleanUser });
    
  
};

const newBudget1 = addExpence(budget, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');

const newBudget2 = addExpence(newBudget1, spendingLimits, 20, 'Stuff', 'Jay');
const newBudget3 = addExpence(newBudget2, spendingLimits, 10, 'Pizza 🍕');
// console.log(newBudget1);
// console.log(newBudget2);
// console.log(newBudget3);
// console.log(budget);

// const checkExpenses = function (state, limits) {
//   return state.map(entry => {
//     return (entry.value < -getLimit(limits,  entry.user)) ? {...entry, flag: 'limit'} : entry;
//   });
//   // for (const entry of newBudget3) 
//   //   if (entry.value < -getLimit(limits,  entry.user)) entry.flag = 'limit';
// };
const checkExpenses = (state, limits) => 
  state.map(entry => 
    (entry.value < -getLimit(limits,  entry.user)) ? {...entry, flag: 'limit'} : entry);

const finalBudgets = checkExpenses(newBudget3, spendingLimits);

console.log(finalBudgets);

const logBigExpenses = function (state, bigLimit) {
  const bigExpences = state.filter(entry => (entry.value <= -bigLimit))
  .map(entry => entry.description.slice(-2))
  .join(' / ');
  // .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, '');
  console.log(bigExpences);

  // let output = '';
  // for (const entry of budget) {
  //   output += (entry.value <= -bigLimit) ? `${entry.description.slice(-2)} / ` : '';
  // }
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};

logBigExpenses(finalBudgets, 500);
