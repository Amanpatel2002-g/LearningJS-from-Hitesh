// for  loop

// for (let index = 0; index < 10; index++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is best number");
//     }
//     console.log(element);
// }


let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length)
// for(let index = 0; index<myArray.length; index++){
//     const element = myArray[index]
//     console.log(element)
// } 

// for(const element of myArray){
//     console.log(element);
// }

const greetings = "greetings"

// const obj = {
//     name:"Aman",
//     company:"TCS"
// }


for(const element of greetings){
    console.log(element);
}

// maps
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')

console.log(map)

for(const [key, value] of map){
    console.log(key, ':-', value)
}

const myObject = {
    game1:'NFS',
    game2:'Spiderman'
}

// for(const [key, value] of myObject){

// }
const myObj = {
    js:'Javascript',
    cpp:'c++',
    rb:'ruby',
    swift:"swift by apple"
}


/*
for (const key in myObject){
    console.log(key)
}
*/

/*
the above code won't work because object is not iterable
*/


for(const key in myObj){
    console.log(key);
}
for(const key in myArray){
    console.log(key);
}
