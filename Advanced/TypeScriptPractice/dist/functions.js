"use strict";
function add(num, num2) {
    let x = num + num2;
    return x;
}
function calculateTax(income, taxYear) {
    if (income < 50000 && taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
console.log(calculateTax(10000, 2020));
function calculateGWA(grades, nGrades = 8) {
    const sum = grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / nGrades;
}
//# sourceMappingURL=functions.js.map