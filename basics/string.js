//We use vactis insted of using "" of '' to access stirng
//By this method we are using string interpolation: and also we can inject var
let name="knuj"
console.log(`hello my name is ${name} i am currently Software devloper`)


const name1=new String(`kunj`)
console.log(name1[1])
console.log(name1.__proto__)
//To master string we have to master all the methods of string

const newstr=name1.substring(0,1)
console.log(newstr)

const newstr2=name1.slice(-2,-1)
console.log(newstr2)//Always big is ignored
const nstr=" kunj "
