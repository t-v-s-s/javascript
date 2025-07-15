// const tinderUser = new Object();//singleton object
// console.log(tinderUser);
//-----------------

// const tinderUser1 ={} //non singleton object


// tinderUser1.id = "tety344"
// tinderUser1.name= "tako"
// tinderUser1.isLoggedIn = false;
//console.log (tinderUser1);

// const regularUser = {
//     email : "sdjgf@gmail.com",
//     fullName :{
//         userfullname :{
//             firstName: "Tanvi",
//             lastname: "Patel"   
//         }
//     }
//}

//console.log(regularUser.fullName); // Accessing nested object properties

//------------------
const obj1 = {1:'a' , 2:'b', 3:'c'};
const obj2 = {4:'a' , 5:'b', 6:'c'};
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3); // Merging two objects using Object.assign
              
                               //-- OR --

const obj3 = {...obj1, ...obj2}; // Using spread operator to merge objects
console.log(obj3); // Merging two objects using spread operator

const course = {
    courseName: "JavaScript",
    price: 999,
    isPaid: true,
    courseInstructor: "Tanvi",

}
const {courseInstructor} = course; // Destructuring to extract courseInstructor property
console.log(courseInstructor); // Output: Tanvi


