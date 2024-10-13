//Enums
const small = 1;
const medium = 2;
const large = 3;

enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
console.log(mySize); //2

const enum Cup { Venti = 1, Grande }; //putting const will compile into more optimized javascript file
let myCup: Cup = Cup.Grande;
console.log(myCup); //2