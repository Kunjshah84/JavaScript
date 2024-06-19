// const arr=[0,1,2,3,4,5,true,"Hitesh"]
// const myarr=[0,1,2,3,4,5]
// //array of JS is resizable: and the arry operation makkes shallow copy here are two concept of shallow and the deep copy:

// const arr2=new Array(1,2,3,4)
// myarr.push(6)
// console.log(myarr);  
// myarr.pop()
// myarr.unshift(9)//This is not recommended:
// console.log(myarr);
// myarr.shift()
// console.log(myarr);

// const myarrj=myarr.join()
// console.log(typeof myarrj);
// console.log(myarrj)

// //slice,splice:
// const sli=myarr.slice(1,3)
// console.log(myarr);
// console.log(sli);
// const spl=myarr.splice(1,3);

// console.log(spl);
// console.log(myarr);

// //now push one array into another array:
const a1=[1,2,3,4,5]
const a2=[6,7]
a1.push(a2)
console.log(a1)
//It is creating the array into the array: 
const na1=[1,2,3,4,5]
const na2=[6,7]
console.log(na1.concat(na2))
//To combine we uses the spread operator:
const all_new = [...a1,...a2]
console.log(all_new);
const bas=[1,[2,3],[1,2,[1,2,[0,0]]]]

const fla=bas.flat(1)
console.log(fla);

//We use this method while using the data scriping:
console.log(Array.isArray("kunj"));
console.log(Array.from("Kunj"));
//From this method we can conver hole array into the array or we can pass the object as perameter:
console.log(Array.from({ name: "kunj"}))
//We have to mention that weather we want to make the arrray with the help of keys or the values directly?
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));