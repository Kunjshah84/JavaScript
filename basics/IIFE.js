//Immediately invock function expression(iife):
//Why we want this function?:-we want that when our application starts our file of data base have to open at that time we want this function:
//Another rease that if we want that we don't want to affect the function variable from the global variable then we have this iife function:


(function DB(){
    console.log(`DB connected`);
})();//This is unnamed IIFE 
//We have to add the; at the end of the IIFE function because the compiler don't know that when to end the function

((name) => {
    console.log(`DB of ${name}`)
})(`kunj`)//This is simple IIFE
console.log(`kunj`);