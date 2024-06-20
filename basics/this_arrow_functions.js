const user={
    username: "kunj" ,
    age :"19",
    price : "999" ,
    wealcom : function(){
        console.log(`${this.username} welcome to websight`);
        console.log(this);
    }
}
user.wealcom()
console.log(this);//That means when we are in the node environment the this refers to an empty obj:
function chai(){
    let username="kunj"
    console.log(this.username);
}
chai()
//So we can say that our this worksperfectly on only in the object:



//The syntax to understand the arrow function:
const chai2=()=>{
    let username="kunj"
    console.log(this.username);
}
chai2()