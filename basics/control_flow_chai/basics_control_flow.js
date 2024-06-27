let var1=100
if(var1==100) console.log("Yep!"),
    console.log("2") ,
    console.log("3");;

//The scope is as same as the c++ language!
// and the js have the feature the code and the scope 
//So this showa how the code have the scope unlike the c++ we have here more space:
let month=2;
switch(month){
    case 2:
        console.log("Fab");
        break ;
    case 3:
        console.log("mar");
        break ;
    default :
        console.log("This is by defult:");
} 


//There also the different types of the stament that have the truthy key value and have the falsy balue:

//This different types of cases have the different value and there is rule for that thing:

let kunj="kunj";

if(kunj)
    console.log("Yes");
else 
    console.log("NO");
let kunj1="";

if(kunj1)
    console.log("Yes");
else 
    console.log("NO");
let kunj2=[];

if(kunj2)
    console.log("Yes");
else 
    console.log("NO");


//There is a list of the truthy and the falsy values:

//Falsy value:
/*

    Flase;
    0;
    BigTnt 0n;
    empty string
    NULL
    Undefine:
    NAN(Not a number is aslo called the falsy value)
*/ 

/*

    this is the imp Truthy value:
    [];
    ();
    {}
    function(){}

*/


//The method from which i can detect that the given object is empty or not?

let obj={}
if(Object.keys(obj).length===0)
    console.log("Yes empty");
else    
    console.log("Yes empty");

//Now what is NULLISH COALESCIG OPERATOR?
/*

we have only null andundefine operator:
it is represented by the ?? sign:

*/ 

let vel1= 5?? 10;//vel1 is the 5
vel1= NULL?? 10;//Here vel1 is 10
vel1=undefined ?? 15;//It will print the 15
vr1 = undefined ?? 15;//It will print undefine
vel1= undefined ?? 10 ?? 15//This is print 10
vel1= undefined ?? 10 ?? 15//This will print 15
//It is going to check the sefty of the given variable weater is NULL and it is Undefine or not!


//Now what is  

