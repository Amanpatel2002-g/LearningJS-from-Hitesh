// singleton

//object literals

// object.create()


const mySym = Symbol("key1")
console.log(mySym);
const JsUsser = {
    name:"hitesh",
    age: 18,
    "full name":"Hitesh choudhary",
    [mySym]:"mykey1",
    location: "Jaipur",
    isLoggedIn: "hitesh@google.com",
    lastLoginDays:['Monday', "Saturday"]
}
// let myArray = ["h", "i"]
// console.log(myArray[0])

// console.log(JsUsser.name);
// console.log(JsUsser.mySym)
// console.log(typeof JsUsser['full name'])
// console.log(typeof JsUsser[mySym])

// JsUsser.age = 32
// console.log(JsUsser);

JsUsser.greetings = function(){
    console.log(`Hello JS user ${this.name}`);
    return 2
}

console.log(JsUsser.greetings())
