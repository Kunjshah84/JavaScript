// //Dates
// let mydate=new Date()
// console.log(mydate);
// //How can i convert this into readable form
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toTimeString());
// console.log(mydate.toUTCString());


//How to create date

let mycreateddate=new Date(2024,10,-1)
console.log(mycreateddate.toDateString());
console.log(mycreateddate);
//Working of the date class is very IMP ho it declar's the date?

let mydatewithtime=new Date(2024,0,23,25,23,5,5)

console.log(mydatewithtime);

//Date in yy-dd formate:ISO
let dateiniso=new Date("2024-01-14")
let mydateinind=new Date("06-19-2024")
let mytimestemp=Date.now()
//It is used to take timestemp:
console.log(mytimestemp);
console.log(mydateinind.getTime());
//Now we can compare two date:
//Date in sec:
console.log(Math.floor(Date.now()/1000));

//ToLocalString is one of the method which is able to make changes into the perameter! we can make the out put that we want!

