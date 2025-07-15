//--------------------------------------- Array -------------------------------------------------
// Arrays are used to store multiple values in a single variable.
// They are a special type of object in JavaScript. 

const myArr =[ 1,2,3,4,5]
console.log(myArr[0]); // Accessing first element

const Heroes = ["batsman","superman","spiderman","ironman"];
console.log(Heroes[0]); // Accessing first element

const  myArr2 = [1,2,3,4,5];
console.log(myArr2[myArr2.length - 1]); // Accessing last element   

//---------------------------------- Array Methods -------------------------------------------------
// Array methods are functions that can be called on arrays to perform various operations.
// Common methods include push, pop, shift, unshift, splice, slice, and for

myArr.push(6); // Adds 6 to the end of the array
myArr.push(7,8); // Adds 7 and 8 to the end of the array
myArr.pop(); // Removes the last element (8)
myArr.shift(); // Removes the first element (1)
myArr.unshift(0); // Adds 0 to the beginning of the array
myArr.splice(2, 1); // Removes 1 element at index 2 (which is 3)

console.log(myArr); // [1, 2, 3, 4,
console.log(myArr.includes(9)); // Checks if 9 is in the array (returns false)
console.log(myArr.indexOf(10)); // Returns the index of 4
console.log(myArr.indexOf(2)); // Returns the index of 2