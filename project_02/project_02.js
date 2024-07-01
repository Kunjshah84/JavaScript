const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault(); 
    const hight=parseInt(document.querySelector('#Hight').value);
    const weight=parseInt(document.querySelector('#Weight').value);
    const text=document.querySelector('#result')
    
    if(hight === '' || isNaN(hight) || hight<0)
        div.innerHTML="Enter valid hight):"
    else if(weight === '' || isNaN(weight) || weight<0)
        div.innerHTML="Enter valid weight):"
    else{
        const ans=hight/weight;
        text.innerHTML=`<span>${ans}</span>`
    }
})