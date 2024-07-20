
// const button = document.querySelector('button')
// button.addEventListener('click', function(e){
//     const inputs = document.querySelectorAll('input')
//     console.log("came here");
//     const height = parseInt(inputs[0].value.toString())
//     const weight = parseInt(inputs[1].value.toString())
//     console.log("came here")
//     console.log(height, weight);
//     const form = document.querySelector('form')
//     const textNode = document.createTextNode(`${height/weight}`)
//     const p = document.createElement('p')
//     p.appendChild(textNode)
//     form.appendChild(p)
// })

const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    console.log(height, weight)
    const result = document.querySelector('#results')
    let category;
    const bmi = (weight/ ((height*height) / 10000)).toFixed(2)
    if(bmi<18.6){
        category = "under weight"
    }
    else if(bmi>=18.6 && bmi<=24.9){
        category = "normal range"
    }
    else{
        category = "over weight"
    }
    result.innerHTML = `<span>${bmi} and you category is ${category}</span>`
})
