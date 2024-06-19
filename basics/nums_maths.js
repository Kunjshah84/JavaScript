const score=400
const balance=new Number(25)
//It is gurentted that the balance is number:
console.log(score)
console.log(balance)
//Now we are able to make changes into the balance with function:

const othernumber=23.89999
console.log(othernumber.toPrecision(1))

console.log("From this")

const tryt=1274.49488
for(let i=1;i<=5;i++)
    console.log(tryt.toPrecision(i))
const b=1000000
console.log(b.toLocaleString('EN-IN'));


//The math library comes with by dfult in JS:
console.log(Math)
console.log(Math.floor(Math.random()*10)  + 1)

const min=10
const max=20

console.log(Math.floor(Math.random() * (max - min +1) ) + min)