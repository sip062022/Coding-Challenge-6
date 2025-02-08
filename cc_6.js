// Task 1: Function Declarations //

function calculateProfit(costPrice, sellingPrice, unitsSold) {  // Declares the function and variables
    return (sellingPrice-costPrice)*unitsSold // Defines the formula to be used
};

console.log(`Total Profit: $${calculateProfit(20, 30, 100)}`); // Expected output: "Total Profit: $1000"
console.log(`Total Profit: $${calculateProfit(50, 70, 200)}`); // Expected output: "Total Profit: $4000"