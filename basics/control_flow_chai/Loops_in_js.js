//Now in the devlopnment we have the batter loop to access the array and data given from the data base or the API:


//Types of different loops:(All the types of loop is array specific loops:)
//FOR OF:

[""," ","kunj"]
[{},{},{}]

const arr=[1,2,3,4,5]
for (const it of arr) {
    console.log(it);
}

const map=new Map(); 

map.set("USA","United states of america:")
map.set("In","INDIA")

console.log(map);

for (const it of map) {
    console.log(it);
}
for (const [key,value] of map) {
    console.log(key , ":->" , value);
}

//How to access the object with the help of for of Loop:
const myobj={
    'Game1': "speider" ,
    'Game2' : "PUBG" 
}

// for (const [key,value] of myobj) {
//     console.log(key , ":->" , value);
// }
//This is not as like that in the hash map:
//so how to access the object in JS:

const myobj2={
    'js': "Java script" ,
    'cp': "c++"
}
//This is not the thing where we have only the forin loop for the object:
for (const key in myobj2) {
    console.log(key);
}

//Now how to get key and value in the objecdt:

for (const key in myobj2) {
    console.log(myobj2[key]);
}

//Now can the for in loop applay for the array?
const arr3=["","k","t","g"];
for (const key in arr3) {
    console.log(`${key} and the value is ${arr3[key]}`);
}
//This is the difference between the in and the of loop like we have key in the in loop we Can't do the two values in the in loop:

//And we are not able to apply the for in loop on the map because the map is not directly itratable like the array:
