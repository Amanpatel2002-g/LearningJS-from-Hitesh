// let myName = "hitesh      "



// console.log(myName.trueLenght())

// myHeros = ["thor", "spiderman"]

// let heroPower = {
//     thor:"thor",
//     spiderman:"spiderman",

//     getSpiderman: function(){
//         console.log(`Spidy power is ${this.spiderman}`)
//     }
// }

// Object.prototype.hitesh = function(){
//     console.log("hitesh is present in all objects");
// }

// heroPower.hitesh()

// myHeros.hitesh()

// Array.prototype.heyHitesh = function(){
//     console.log("hitesh says hello");
// }

// myHeros.heyHitesh()
// heroPower.heyHitesh()

const Teacher = {
    makeVideo: true
}

const TeacherSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment:'JS Assignment',
    fulltime:true,
    __proto__: TeacherSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeacherSupport, Teacher)
