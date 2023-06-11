let string="";
let buttons = document.querySelectorAll('.butt');
Array.from(butt).forEach((button)=>
{
    button.addEventListener('click',(e)=>{
        console.log(e.target)
    })
})