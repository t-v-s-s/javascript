// function myName (){
//     console.log ("T")
//     console.log ("A")
//     console.log ("N")
//     console.log ("V")
//     console.log ("I")

// }
// myName(); // Calling the function to print my name

//------------------    

// function addTwoNumber(num1, num2) {
//     return num1 + num2;
// }

// console.log(addTwoNumber(2, 4)); // Output: 6

// -------------------

// function logInUserMessage(username){
//     if(username=== undefined  ){
//         console.log("please enter a username")
        
//     }
//     return `${username} just logged in`
// }

//  console.log(logInUserMessage()); // Output: TANVI just logged in
//  console.log(logInUserMessage(""));
//  console.log(logInUserMessage("Tanu")); // Output: Tanu just logged in

 //------------------

function calculateCartPrice(...prices) {
    return prices.reduce((acc, curr) => acc + curr, 0);
}

console.log(calculateCartPrice(200, 300, 400, 500)); // Output: 1400


const user = {
    username: "Tanu",
    price: 200,
};

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user); // Output: username is Tanu and price is 200
    handleObject ({
        username: "Tanu",
        price: 200, 
    })

    const myNewArray = [1, 2, 3, 4, 5];
    function returnSecondValue(getArray){
        return  getArray    
    }
    console.log (returnSecondValue (myNewArray)); // Output: [1, 2, 3, 4, 5]

