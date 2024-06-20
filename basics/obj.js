// //We can create object in two ways one is letreal and another is constructor:
// //  Sigleton:(when we make object from constructor the object is made uniue and it have the single reference:)
// //And when we declar the object with the help of literal the object have multiple reference:
// // Object.create() //This is the method of constructor:and the object is singleton:

// const mysym=Symbol("key1")

// const jsuser= {
//     name:"hitesh",
//     "Full name":"kunj r shah",
//     age:19,
//     [mysym]: "This is symbol",//Syntax to use the symbol as key for the object:
//     location:"nadiad",
//     email:"abcd@gmail.com",
//     isloggedin:false,
//     lastlogindays:["Monday","Saturday"]
// }
// console.log(jsuser.email);//This is noa good method when the key value is is the form of ""
// console.log(jsuser["email"]);
// console.log(jsuser["Full name"]);//We can't do with the help of dot operator:

// //To lock the object:
// // Object.freeze(jsuser)
// jsuser["email"]="kunjshah@mail.com";
// console.log(jsuser["email"])

// console.log(jsuser);

// jsuser.hello_function = function(){
//     console.log("Hello kunj shah");
// }

// jsuser.hello_function2 = function(){
//     console.log(`Hello kunj shah you age is ${this.age}`);
// }

// console.log(jsuser.hello_function);
// console.log(jsuser.hello_function());

// console.log(jsuser.hello_function2);

//This is the starting for the obj2 part:

const tinderuser={}

tinderuser.id="123"
tinderuser.name="kunj"
tinderuser.login=false
console.log(tinderuser);

const regularuser={
    email:"kunj@mail.com",
    fullname: {
        userfullname:{
            firstname:"kunj",
            lastname:"shah"
        }
    }
}//This obj is excess with the help of nesting:


//Combining two obj:
const obj1={
    1:"a",
    2:"b",
    3:"c"
}
const obj2={
    4:"c",
    5:"d"
}


const obj3=Object.assign({},obj1,obj2)
console.log(obj3);
console.log(obj1);

const obj4=Object.assign(obj1,obj2)//It is going to stor all the values into the first object which is obj1
console.log(obj4);
console.log(obj1);

const obj5={...obj1,...obj2}
console.log(obj5)

//There are multiple methods for the object:
//Object destructring:

const course={
    name : "JS",
    fees: "500",
    feculty: "kunj"
}

const {feculty : sir}= course
console.log(sir);
//That how we can able to distctere the object:

//API basic intro:this is the form that we get the apt
// {
//     "name" : "knuj",
//     "course" : "JS",
//     "price" : "3000"
// }//This is jeson--->This is not a perferct object this is the kind of jeson structure:
//In this the key valus is in the form fo string:


//All of the apis are in the format of jeson:
//What is jeson : like it is the simple JS object notation:
