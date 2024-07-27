function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.getAllDetails = function(){
    console.log(`username is ${this.username} and score is ${this.score}`)

}

const user1 = new createUser('Aman', 100)
const user2 = new createUser('Ayush', 200)

user1.getAllDetails()
user2.getAllDetails()

// make a function like get true legnth "getTrueLenght" in string

String.prototype.getTureLegnth = function(){
    return this.trim().length
}

let name = "      hitesh  "
console.log(name.getTureLegnth())