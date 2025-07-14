const score = 400
console.log(score);

const balance = new Number (100)
console.log(balance)

console.log(balance.toString().length); // 3
console.log(balance.toFixed(5)); // 100.00000 (prisision value)

const  otherNumber = 123.475678
console.log(otherNumber.toPrecision(3)); // 123 (3 significant digits)
console.log(otherNumber.toPrecision(5)); // 123.48 (5 significant digits)
console.log(otherNumber.toExponential(2)); // 1.23e+2 (2 significant digits)
console.log(otherNumber.toExponential(4)); // 1.2348e+2 (4 significant digits)  

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN')); // 1,000,000

//--------------------maths operations-----------------------------
console.log(Math)
console.log(Math.abs(-4)); // 4 (absolute value)
console.log(Math.ceil(4.2)); // 5 (rounds up)
console.log(Math.floor(4.8)); // 4 (rounds down)
console.log(Math.round(4.5)); // 5 (rounds to nearest integer)
console.log(Math.min(4,6,1,9))
console.log(Math.max(4,6,1,9))
console.log(Math.random()); // random number between 0 and 1
console.log(Math.random ()* 10); // random number between 0 and 100
console.log(Math.random() * 100 + 1); // random number between 0 and 100