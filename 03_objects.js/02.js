// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "1234abc"
tinderUser.name = "Sammy"
tinderUser.isloggedIn = false


// console.log(tinderUser)

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}

// console.log(regularUser.fullname);
const obj1 = {1: "a", 2:'b'}
const obj2 = {3: "a", 4:'b'}
const target = {}
const returnedTarget = Object.assign(target, obj1, obj2)


console.log(target===returnedTarget);

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
]
users[0].email
console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isloggedIn'))

const course = {
    coursename: "js in hinid",
    price:"999",
    courseInstructor:"hitesh"
}

// course.courseInstructor

const {courseInstructor:instructor} = course
console.log(instructor)