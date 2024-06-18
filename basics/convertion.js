// let score="33" easly conversion to the number but in the case of string that is not possible to connvert!
let score="22abc"//the type of conversition is NAN
// const {score}=req.body
console.log(typeof score);
let valuenumber=Number(score)
console.log(typeof valuenumber)
console.log(valuenumber)
let s=null
console.log(typeof s);
let v=Number(s)
console.log(typeof v)
console.log(v)
//Same for undeclard the conversion value is undefine:
let login="kunj"
let booltemp=Boolean(login)
console.log(typeof booltemp)
console.log(booltemp)

let num=33;
let snum=String(num)
console.log(snum)
console.log(typeof snum)