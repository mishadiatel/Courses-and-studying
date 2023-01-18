const budget = [
    {
        value: 250,
        description: "Sold old TV \uD83D\uDCFA",
        user: "jonas"
    },
    {
        value: -45,
        description: "Groceries \uD83E\uDD51",
        user: "jonas"
    },
    {
        value: 3500,
        description: "Monthly salary \uD83D\uDC69‍\uD83D\uDCBB",
        user: "jonas"
    },
    {
        value: 300,
        description: "Freelancing \uD83D\uDC69‍\uD83D\uDCBB",
        user: "jonas"
    },
    {
        value: -1100,
        description: "New iPhone \uD83D\uDCF1",
        user: "jonas"
    },
    {
        value: -20,
        description: "Candy \uD83C\uDF6D",
        user: "matilda"
    },
    {
        value: -125,
        description: "Toys \uD83D\uDE82",
        user: "matilda"
    },
    {
        value: -1800,
        description: "New Laptop \uD83D\uDCBB",
        user: "jonas"
    }
];
const spendingLimits = {
    jonas: 1500,
    matilda: 100
};
const getLimit = (user)=>spendingLimits?.[user] ?? 0;
const addExpence = function(value, description, user = "jonas") {
    user = user.toLowerCase();
    if (value <= getLimit(user)) budget.push({
        value: -value,
        description,
        user
    });
};
addExpence(100, "Going to movies \uD83C\uDF7F", "Matilda");
addExpence(200, "Stuff", "Jay");
addExpence(10, "Pizza \uD83C\uDF55");
console.log(budget);
const checkExpenses = function() {
    for (const entry of budget)if (entry.value < -getLimit(entry.user)) entry.flag = "limit";
};
checkExpenses();
console.log(budget);
const logBigExpenses = function(bigLimit) {
    let output = "";
    for (const entry of budget)output += entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : "";
    output = output.slice(0, -2); // Remove last '/ '
    console.log(output);
};
logBigExpenses(100);

//# sourceMappingURL=index.3ec6c1be.js.map
