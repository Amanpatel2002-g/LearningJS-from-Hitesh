price = 10000
const user = {
    usernmae:"hitesh",
    price:999,
    welcomeMessage: function(){
        console.log(this);
        console.log(`${this.usernmae}, welcome to website `)

    }
}
// user.welcomeMessage()

const getSum = (num1, num2)=>{
    console.log(this)
    return num1+num2
}

const addTwo = (num1, num2)=>(num1+num2)
const returnObject = ()=>({usernmae:"hitesh"})
