// imidieatly invoked function expression

(function chai(){
    // named IIFE
    console.log('DB connected')
})();

// ';' is the most important here to make sure that it is able to sepearate between the stack context  

((name)=>{
    console.log(`DB connected ${name}`);
})("Hitesh")  