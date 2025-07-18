// let a = 300
// if(true){
//      let a = 30
//      const b = 20
//      console.log("INNER : " ,a);



// }
// console.log("OUTER : " ,a);

// ------------------ Nested Scope ----------------------------

function one (){
     const username = "Tanu"

     function two (){
        const website = 'youtube'
        console.log(username);
     }
     //console.log(website); // This will throw an error because 'website' is not defined in this scope
     //two()
}
//one()



if (true){
    username = "takuu";

    if (username === "takuu"){
        website = "twitter";
        console.log(username + website)
    }

    console.log("Inside block:", website); // ✅
}

console.log("Outside block:", username); // ✅
