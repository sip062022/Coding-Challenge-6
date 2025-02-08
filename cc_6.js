// Task 1: Function Declarations //

function calculateProfit(costPrice, sellingPrice, unitsSold) {  // Declares the function and variables
    return (sellingPrice-costPrice)*unitsSold // Defines the formula to be used
};

console.log(`Total Profit: $${calculateProfit(20, 30, 100)}`); // Expected output: "Total Profit: $1000"
console.log(`Total Profit: $${calculateProfit(50, 70, 200)}`); // Expected output: "Total Profit: $4000"

// Task 2: Function Expression //

function calculateSalesTax(amount, taxRate) { // Declares function and its variables
    return (amount*taxRate) // Defines formula to be used
};

console.log(`Sales Tax: $${Math.floor(calculateSalesTax(100, 0.07))}`) // Expected output: "Sales Tax: $7" ... used mathfloor to round down the answer to an even $7
console.log(`Sales Tax: $${calculateSalesTax(500, 0.1)}`) // Expected output: "Sales Tax: $50"