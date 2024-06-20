function kunj(){
    console.log("HYY I AM kunj Shah");
}

//this is reference of the function kunj4: and this is excution of the function:kunj()
kunj
kunj() 

function addTwonumber(num1,num2){
    console.log(num1+num2);
    return num1+num2
}
addTwonumber(3,4)
//Problem arise when the user is not enterd a sutiable value:
//so we have to check the entered number:
console.log(addTwonumber(5,3));


function loginusermsg(username){
    if(username === undefined || !username)//because the username which is undefine which have false value:
        return `user dose't exiest:`
    return `${username} just logedin`;
}

//Function part 2:
//How to get undefine number of arg:

//... this is rest ans spread operator also this depends in which case we are working:
//Here ... is rest:
function claculateprice(num3,num2,...num1){
    return num1;
}
console.log(claculateprice(2,5,6,7,1000));


const user={
    name : "kunj",
    price: "999"
}

function  handleuser(obj){
    console.log(`username is ${obj.name} and the price is ${obj.price}`);
}

//The imp topic is closuer property: 
//The concept of hosting is imp which tells us that how to hold the fuunction and how we can store the function: and this syntax illustrate's that how we can store the function into the variable:
//We can call the function befor define the function:
console.log(one(5,6));
function one(n1,n2){
    return n1+n2;
}
//Some time this is called as the experission:

//This is not valid in JS:
//console.log(funvar(5+6))

const funvar= function(n1,n2){
    return n1+n2;
}