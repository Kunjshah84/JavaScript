console.log("2">1)
console.log("02">1)//It is good practice to maitian the same data type to compare:
console.log("2abs">1)
console.log(null==0)
console.log(null>=0)
console.log(null>0)
console.log(null<=0)
//Now the resion behind this is that the work of the == nd the >= etc are different in JS: ans here the NULL is converting into 0 when it compers with the >= etc...

//==== it is going to check the data type also brfore the conversion:

//This is how we can assign the symbol to the var

let id=Symbol('123')
let anotherid=Symbol('123')
console.log(id)
console.log(anotherid)
console.log(id == anotherid)

//To put n at the end of number the compiler convert the number into BIGINT

//We can store function into var

const myFunction= function(){
    console.log("Hello kunj")
}
console.log(typeof myFunction)