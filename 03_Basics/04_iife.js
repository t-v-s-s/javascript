//------------------------IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)-------------------------
//This is a function that runs immediately after it is defined

(function chai (){ // here chai is named iife
    console.log(`Db connect`);
})(); // ; is optional but good practice to use it

//-------------------------- Arrow function IIFE --------------------------
//This is an arrow function that runs immediately after it is defined
((name) => { // unnamed iife
    console.log(`Db connect To ${name}`);
})("gallu");
