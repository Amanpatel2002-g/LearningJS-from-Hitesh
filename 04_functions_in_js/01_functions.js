function loginUserMessage(username="sam"){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

// function loginUser(...user){
    // now you can access the all the elements added in thee array
// }
// 

console.log(loginUserMessage())

