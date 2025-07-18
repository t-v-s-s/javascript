const email = "sdhfkja"

if (email){
    console.log ("Got user email")
}
else {
    console.log("Dot't have user email")
}

//---------------- Falsy value ---------------------
//false , 0  -0 , BigInt  , "" , NaN , null , undefined

//---------------- Truthy value ---------------------
//True , "0 " (string ni andar che etle e true ganai) , 'false '(string ni andar che etle true ganai)," " (empty value ma space apo to pn true ganai) , {} [],functions(){}

//-----------------  Nullish coaliscing operatorc(??) null undefined -------------------

let val = 5 ?? 10
console.log(val)
let val1 = null ?? 10 
console.log(val1) // 10 (2 value che ama thi first null hoi to second print thai)
let val2 = undefined ?? 10 
console.log(val2)   // 10 (2 value che ama thi first undefined hoi to second print thai)  
val3 = null ?? 10 ?? 15  //(function hoi tyre j pn first value ave a.  print thai )
console.log(val3)  

// ---------------- ternairy  operator ------------------------------------

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80"):console.log("more than 80")
