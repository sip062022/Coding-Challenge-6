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

console.log(`Sales Tax: $${Math.floor(calculateSalesTax(100, 0.07))}`); // Expected output: "Sales Tax: $7" ... used mathfloor to round down the answer to an even $7
console.log(`Sales Tax: $${calculateSalesTax(500, 0.1)}`); // Expected output: "Sales Tax: $50"

// Task 3: Arrow Function //

const calculateBonus = (salary, performanceRating) =>{ // Declares a function and its variables
    const ratings = { Excellent: 0.20, Good: 0.10, Average: 0.05 }; // Defines the ratings and their numberical equivalents
    return salary * (ratings[performanceRating]) // Defines the formula to be used
};

console.log(`Bonus: $${calculateBonus(5000, "Excellent")}`); // Expected output: "Bonus: $1000"
console.log(`Bonus: $${calculateBonus(7000, "Good")}`); // Expected output: "Bonus: $700"