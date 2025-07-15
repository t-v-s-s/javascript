//--------singelton----------------------------------------------
//-----object literals--------------------------------------------------

Object.create   // Object.create() is a method that creates a new object, using an existing object as the prototype of the newly created object.



const jsUse ={ 
    name :"Tanvi",
    age: 25,
    city : "Ahmedabad",
    isLoggedIn: false,
    lastLoginDays : ["Monday", "Tuesday", "Wednesday"],
}
 console.log(jsUse.city); // Accessing property using dot notation
 console.log(jsUse["age"]); // Accessing property using bracket notation