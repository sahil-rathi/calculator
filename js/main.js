let screen=document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue='';

function deleteChar(){
    screen.value=screen.value.slice(0,-1);
}
for(item of buttons)
{
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        if(buttonText=='X')
        {
            buttonText='*';
            screen.value+=buttonText;
        }
        else if(buttonText=='C')
        {
            buttonText='';
            screen.value='';
        }
        else if(buttonText=='=')
        {
            buttonText='';
            screen.value=eval(screen.value);
        }
        else if(buttonText=='–')
        {
            buttonText='-';
            screen.value+=buttonText;
        }
        else
        {
            screen.value+=buttonText;
        }
        
    })
}