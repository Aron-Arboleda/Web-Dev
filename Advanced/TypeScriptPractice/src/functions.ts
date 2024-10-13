//functions

function add(num: number, num2: number) { //return type is default to void
    let x = num + num2;
    return x
}

function calculateTax(income: number, taxYear: number): number { //return type is number
    if (income < 50_000 && taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;   
}

console.log(calculateTax(10_000, 2020));

function calculateGWA(grades: number[], nGrades = 8) { //return type is number
    // "?" makes the argument optional
    // nGrades = 2022 sets a default value
    const sum = grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / nGrades;
}