const prmoiseOne = new Promise(function (resolve, reject) {
  // Do as async task
  // DB calls, cryptography, network calls
  setTimeout(function () {
    console.log("This is the inside of setTimeout function"), resolve();
    1000;
  });
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

prmoiseOne.then(function () {
  console.log("Promise consumed");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({
      username: "chai",
      email: "chai@xmaple.com",
    });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const prmoiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "hitesh", password: "123" });
    } else {
      reject("ERROR: something went wrong!");
    }
  }, 1000);
});

const username = prmoiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

// console.log(username);

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "hitesh", password: "123" });
    } else {
      reject("ERROR: something went wrong!");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// consumePromiseFive()

async function getAllUsers() {
  try {
    
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// getAllUsers();

const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url).
then((response)=>response.json()).
then((data)=>console.log(data))
