let myDates = new Date();
console.log(myDates);
console.log(myDates.toString()); // Converts date to string
console.log(myDates.toDateString()); // Returns date in a readable format
console.log(myDates.toTimeString()); // Returns time in a readable format
console.log(myDates.toISOString()); // Returns date in ISO format
console.log(myDates.toLocaleDateString()); // Returns date in local format
console.log(myDates.toLocaleTimeString()); // Returns time in local format
console.log(myDates.getFullYear()); // Returns the year (4 digits)
console.log(myDates.getMonth()); // Returns the month (0-11, where 0    
console.log(typeof myDates); // "object"

let createNewDate =  new Date(2025,0,14)
console.log(createNewDate.toDateString())
