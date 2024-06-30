const all_buttons=document.querySelectorAll('.Buttons')
const body=document.querySelector('body')
all_buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id == 'green')
            body.style.backgroundColor='green'
        else if(e.target.id == 'yellow')
            body.style.backgroundColor = 'yellow'
        else if(e.target.id == 'gray')
            body.style.backgroundColor = 'gray'
        else
            body.style.backgroundColor='brown'
    })
})