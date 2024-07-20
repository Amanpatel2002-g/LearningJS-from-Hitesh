const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
console.log(buttons)
// Array.from(buttons)
buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id==='grey' || e.target.id==='white' || e.target.id=== 'blue' || e.target.id==='yellow'){
            body.style.backgroundColor = e.target.id
        }
    })
})