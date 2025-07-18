// -------------------- FOR LOOP ---------------------------
for (let index = 0; index < 10; index++) {
    const element = index;{
        if (element == 5){
            console.log("5 is best number")
        }
    }
    console.log(element);
}

//--------------------------------
for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value : ${i}`);

    for (let j = 0; j <= 20; j++) {
        console.log(`Inner loop value ${j} and outer loop ${i}`);
    }
}

// ---------------- Array --------------------------
let myArray = ['spiderman', 'superman', 'batsman'];
//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}

//------------ break and continue -------------------------
for (let index = 0 ; index <= 20 ; index++)  {

  if  (index == 5){
    console.log(` Detected number`);
    break
  }
     console.log (`value of i is  ${index}`);

}

for (let index1 = 0 ; index1 <= 20 ; index1++)  {

  if  (index1 == 5){
    console.log(` Detected number`);
    continue
  }
     console.log (`value of i is  ${index1}`);

}

