const user = {
    username : "ballu",
    price : 999 ,

    welcomeMessage: function() {    
        console.log(`Welcome ${this.username} to website`); // .this is used for correct context uasge 
}
}
user.welcomeMessage(); // Output: Welcome ballu to website
user.username="mallu"
console.log(user.welcomeMessage()); // Output: Welcome mallu to website
console.log(this);

// ------------------  another way to declare with  Arrow Functions ----------------------------
    const chai = ()  =>{
        let username = "Tanu"
        console.log(this.user);
    }
    chai(); // Output: undefined, because 'this' refers to the global object in non-strict mode

// ------------------  Arrow Functions with Parameters ----------------------------
const chai1 = ()  =>{
        let username = "Tanu"
        console.log(this);
    }
    chai1(); // Output: undefined, because 'this' refers to the global object in non-strict mode

    // ------------------  Arrow Functions basic ----------------------------

    const addTwo = (num1, num2) => {
        return num1 + num2;
    }
    console.log(addTwo(2, 3)); // Output: 5

    // ------------------  Arrow Functions implicit method ----------------------------
    const addThree = (num1, num2) => num1 + num2;
    console.log(addThree(4, 3)); // Output: 5

    // ------------------  Arrow Functions object    ----------------------------
    const addfour = (num1, num2) => ({name: "tallu",})
       console.log(addfour(4, 3)); // Output: {name: "tallu"
   