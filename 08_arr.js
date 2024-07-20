// const arr = [1, 2, 3, 4, 5, 'hitesh']
// const myHeros = ["shaktiman", "nagaraj"]
// const myArr2 = new Array(3, 2, 3, 2)
// console.log(myArr2[0]);

// // // Array methods
// // myArr2.unshift(9)
// // console.log(myArr2) ;

// // console.log(myArr2.includes(9))
// // console.log(myArr2.join())
// // console.log(typeof myArr2.join())

// console.log()


// *****************************************Array part2**************************

let marvel_heros = ["thor", "Ironman", "spiderman"]
let dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(...dc_heros)
// console.log(marvel_heros.length);
// console.log(marvel_heros[3]);
// marvel_heros = marvel_heros.concat(dc_heros)
// console.log(marvel_heros)

const all_new_herso = [...marvel_heros,  ...dc_heros]
console.log(all_new_herso);
const another_array = [1, 2, ,3,4, 5, 6, 7 , 8, [6, 7, [4, 5]]]
const  reaL_another_array = another_array.flat(Infinity)
console.log(reaL_another_array);


console.log(Array.from({name:"hitesh"})) // interesting
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2, score3))