const target = randomeNumber(1, 100)
let originalValue = 10
let chances = originalValue

document.getElementById('subt').addEventListener('click', function(e){
    e.preventDefault()
    if(chances>0){
        console.log(target)
        console.log("came here");
        chances--;
        const inputfield = document.getElementById('guessField')
        let previousValues = document.getElementsByClassName('guesses')[0].innerHTML
        const curr = parseInt(inputfield.value) 
        document.getElementsByClassName('guesses')[0].innerHTML = previousValues + ", "+curr.toString()
        inputfield.value = ''
        console.log(curr);
        let lowOrHi = document.getElementsByClassName('lowOrHi')
        if(curr===target){
            console.log("came inside the counter");
            lowOrHi[0].innerHTML = "<h1>👍</h1>"
            // lowOrHi.innerHTML = '<h1>Equal</h1>'
            console.log(lowOrHi);

        } 
        else if(curr>target){
            lowOrHi[0].innerHTML = '<h1>VERY HIIIIGH</h1>'
        }
        else{
            lowOrHi[0].innerHTML = '<h1>VERY LOOOOOW</h1>'
        }
        let remainingChances = document.getElementsByClassName('lastResult')
        console.log("came inside after the lowor hi",remainingChances);
        remainingChances[0].innerHTML = `${chances}`
        if(chances==0){
            document.getElementById('guessField').disabled = true
            document.getElementById('sbmt').disabled = true
        }
    }
},

);

document.getElementById('rest').addEventListener('click', function(e){
    chances = originalValue
    document.getElementById('guessField').disabled = false
    document.getElementById('sbmt').disabled = false
});

function randomeNumber(lower, higher){
    // lower and higher
    const num = Math.round(Math.random() *  (higher - lower + 1) + lower)
    return num
}

