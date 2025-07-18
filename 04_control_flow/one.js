/*const isLoggedIn = true

if(2 != 3){
    console.log("Executed")
}

const temp = 60
if (temp > 45){
    console.log("It is too hot outside ")
}
else
console.log("the weather is ok...")

//-------   scope related-------------
const score = 200
if (score > 100){
    const power = "fly"
    console.log(`User power : ${power}`)
}*/

// ------------- short hand notations -------------
/*const balance = 600
//if (balance < 500)  console.log("Low balance  please recharge   your account") // this is not recommended
if(balance < 500){
    console.log ("less than 500 ")
} else if  (balance < 750 ){
    console.log("less than 750")
} else {
    console.log("balance is good  ")
}*/

const userLoggedIn = true;
const debitCard = true; // fixed spelling
const loggedInGoogle = false;
const loggedInFromGmail = true;

if (userLoggedIn && debitCard) {
    console.log("You are allowed to buy the course");
}

if (loggedInGoogle || loggedInFromGmail) {
    console.log("User logged in successfully");
} else {
    console.log("User not logged in");
}



