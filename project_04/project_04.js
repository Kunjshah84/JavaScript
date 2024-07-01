const main_num=parseInt(Math.random()*100+1);
const submit=document.querySelector(".submit_button");
const input_user=parseInt(document.getElementById('#guss').value)
const pre_guess=document.querySelector(".previous_guess");
const ramaning=document.querySelector(".remaning_guess");
const highorlow=document.querySelector(".LoworHigh");
const doneornot=document.querySelector(".result");
const current=document.querySelector(".current_guess");

const p=document.createElement('p')

let prevv_arr=[];
let total_gusses=1;

let play_game=true;

if(paly_game){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        validation(input_user);
    }) 
}

function validation(guess){
    if(isNaN(guess) || guess<=0 || guess>100){
        alert(`Please enter valid number`);
    }
    else{
        prevv_arr.push(guess);
        if(total_gusses === 11){
            displayguess(guess);
            message(`Game Is Over :) You lost the Game And the Random number is ...${main_num}`)
            endgame();
        }
        else{
            displayguess(guess);
            checkguess(guess);
        }
    }
}
//It is going to change all the values of the given arrray and close the button and inner HTML property change:
function checkguess(guess){
    if(main_num!=guess){
        if(main_num<guess){
            highorlow.innerHTML=`High value bro!!`;
        }
        else{
            highorlow.innerHTML=`low value bro!!`;
        }
        message(`Wrong guess bro!!`)
    }
    else{
        message(`Congratulation you guess the correct nunmber starting the new game`);
        endgame();
    }
}

function displayguess(guess){
    input_user.value=``;//Not necessary:)
    current.innerHTML+=` ${guess}`
    total_gusses+=1;
    ramaning.innerHTML=`${11-total_gusses}`
}
function message(message){
    document.querySelector('.states').innerHTML=`${message}`;
}

function endgame(){
    input_user=``;
    document.querySelector('.input').setAttribute('disable','');
    p.classList.add('button')
    p.innerHTML= '<h2 id="new_game">start new game:</h2>'
    doneornot.appendChild(p)
    paly_game=false
    newgame()
}

function newgame(){

}

