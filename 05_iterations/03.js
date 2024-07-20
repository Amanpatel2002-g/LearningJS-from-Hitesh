const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach((item)=>{
    // console.log(item);
    return item
})

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const greaterThanFiveNums = myNums.filter((num)=>num>5)

// console.log(greaterThanFiveNums)

/*
In the filter function
the value would be included in the return array if you return it true
otherwise it won't be included
*/ 

/*
const greaterThanFiveNums = []

myNums.forEach((num)=>{
    if(num>4){
        greaterThanFiveNums.push(num)
    }
})
console.log();
*/

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 2000, edition: 2005 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1995, edition: 1998 },
    { title: 'Book Three', genre: 'Science', publish: 2010, edition: 2012 },
    { title: 'Book Four', genre: 'History', publish: 2005, edition: 2007 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
    { title: 'Book Ten', genre: 'Fantasy', publish: 2013, edition: 2017 },
    { title: 'Book Eleven', genre: 'Biography', publish: 1999, edition: 2001 },
    { title: 'Book Twelve', genre: 'Science', publish: 2015, edition: 2018 },
    { title: 'Book Thirteen', genre: 'History', publish: 2002, edition: 2004 },
    { title: 'Book Fourteen', genre: 'Fiction', publish: 1993, edition: 1996 },
    { title: 'Book Fifteen', genre: 'Non-Fiction', publish: 2008, edition: 2011 },
    { title: 'Book Sixteen', genre: 'Fantasy', publish: 2016, edition: 2019 },
    { title: 'Book Seventeen', genre: 'Science', publish: 2020, edition: 2022 },
    { title: 'Book Eighteen', genre: 'History', publish: 1994, edition: 1997 },
    { title: 'Book Nineteen', genre: 'Biography', publish: 2012, edition: 2015 },
    { title: 'Book Twenty', genre: 'Fiction', publish: 1990, edition: 1992 },
    { title: 'Book Twenty-One', genre: 'Science', publish: 2006, edition: 2009 },
    { title: 'Book Twenty-Two', genre: 'Fantasy', publish: 1988, edition: 1991 },
    { title: 'Book Twenty-Three', genre: 'Non-Fiction', publish: 2014, edition: 2016 },
    { title: 'Book Twenty-Four', genre: 'Biography', publish: 2001, edition: 2003 },
    { title: 'Book Twenty-Five', genre: 'History', publish: 1985, edition: 1990 },
  ];

  
// const userBooks = books.filter((bk)=>bk.genre==="History")

const userBooks = books.filter((bk)=>bk.publish>=1995 && bk.genre==="History")
// console.log(userBooks);

/* 
const myNumers = [1,2,3,4,5,6,7,8,9,10]

const  newNums = myNumers.map((num)=> num*10)
                        .map((num)=>num+1)
                        .filter((num)=> num>=40)
console.log(newNums) 
*/

const initialValue = 0

 
/* const myTotal = myNums.reduce(function (acc, currval, ind, arr){
    return acc+currval
}, initialValue)  */


// const myTotal = myNums.reduce(function (acc, currVal){

// })

/* const myTotal = myNums.reduce(( acc, currInd)=>acc+currInd, initialValue)
console.log(myTotal) */

const ShoppingCart = [
    {
        itemName:"js course",
        price:2999
    },    
    {
        itemName:"Data science",
        price:12999
    },    
    {
        itemName:"Mern STack",
        price:99
    },    
    {
        itemName:"C++ by hitesh",
        price:999
    },
]

const priceToPay = ShoppingCart.reduce((acc, item)=>acc+item.price, 0)

console.log(priceToPay);
