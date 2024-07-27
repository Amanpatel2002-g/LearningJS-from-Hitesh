const user = {
    username:'hitesh',
    loginCount:8,
    singedIn:true,

    getUserName: function(){
        // console.log(`Got user from users ${this.username}`)
        console.log(this)
    }
}


// console.log(this)
// console.log(user.getUserName())

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greetings = function(){
        console.log(`Welcome ${this.username}`)
    }
    // return this
    return 2
}

const userone = new User("Hitesh", "3", true)
const userTwo = new User("chaiAurCode", "2", false)
console.log(userone)
console.log(userTwo)




