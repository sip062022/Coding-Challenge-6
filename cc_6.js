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

const calculateBonus = (salary, performanceRating) => { // Declares a function and its variables
    const ratings = { Excellent: 0.20, Good: 0.10, Average: 0.05 }; // Defines the ratings and their numberical equivalents
    return salary * (ratings[performanceRating]) // Defines the formula to be used
};

console.log(`Bonus: $${calculateBonus(5000, "Excellent")}`); // Expected output: "Bonus: $1000"
console.log(`Bonus: $${calculateBonus(7000, "Good")}`); // Expected output: "Bonus: $700"

// Task 4: Paramenters and Arguments //

function calculateSubscriptionCost(plan, months, discount = 0) { // Declares the function and variables
    const planCosts = { Basic: 10, Premium: 20, Enterprise: 50 }; // Defines the plans' numerical equivalents
    return planCosts[plan] * months * (1-(discount/100)) // Defines the formula to be used; (1-(discount/100)) is used to convert the discount into a decimal, and then convert into the price after discount
};

console.log(`Total Cost: $${calculateSubscriptionCost("Basic", 6, 10)}`); // Expected output: "Total Cost: $54" (per assignment expected result would be $50, but this math was incorrect as a 10% discount on a 6 month plan at $10/month is $54 not $50)
console.log(`Total Cost: $${calculateSubscriptionCost("Premium", 12, 0)}`); // Expected output: "Total Cost: $240"
