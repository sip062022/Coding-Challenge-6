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

// Task 5: Returning Values // 

function convertCurrency(amount, exchangeRate) {  // Declares the function and its variables
    return amount * exchangeRate // Defines the formula to be used
};

console.log(`Converted Amount: $${convertCurrency(100, 1.1).toFixed(2)}`); // Expected output: "Converted Amount: $110.00"; .toFixed(2) used for 2 decimal places
console.log(`Converted Amount: $${convertCurrency(250, 0.85).toFixed(2)}`); // Expected output: "Converted Amount: $212.50"; .toFixed(2) used for 2 decimal places

// Task 6: Higher-Order Function //

const orders = [200, 600, 1200, 450, 800]; // Declares orders array
function applyBulkDiscount(orders, discountFunction) { // Defines function to be used to apply the discount
    return orders.map(discountFunction); // Defines that each order in the array will have the discount applied to it
};

let discountedOrders = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount); // Defines the discount formula with the condition that it will only be applied for orders over 500

console.log(discountedOrders); // Expected output: [200, 540, 1080, 450, 720]

// Task 7: Closures //

function createExpenseTracker() { // Defines the formula and its variables
    let total = 0; // Sets initial value to $0
    return function(amount) { // Returns the function
    total += amount;  // returns the previous total plus the new amount
        return `Total Expenses: $${total}`;  // logs "Total Expsenses: $" and the total
    };
};

let tracker = createExpenseTracker(); // defines the tracker as expense tracker
console.log(tracker(200)); // Expected output: "Total Expenses: $200"
console.log(tracker(150)); // Expected output: "Total Expenses: $350"

// Task 8: Recursion in JavaScript //

function calculateYearsToPromotion(employeeLevel) { // Defines the function and its variable
    if (employeeLevel >= 10) { // Stops the promotions after level 10
      return 0; // Return 0 years if employee is already at level 10
    }
    return 2 + calculateYearsToPromotion(employeeLevel + 1); // adds two years for each promotion
};

console.log(`Years to Level 10: ${calculateYearsToPromotion(7)}`); // Expected output: "Years to Level 10: 6"
console.log(`Years to Level 10: ${calculateYearsToPromotion(5)}`); // Expected output: "Years to Level 10: 10"