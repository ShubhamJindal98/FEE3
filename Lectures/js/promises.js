//promises are future events, technically they are object
//3 states - pending, rejected, fulfilled
//By default promises are in pending state
//It change it state as per the request

//syntax
//let p = new Promise();

let like = true;
//By default it has 2 callbacks - resolve,reject
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (like) {
      resolve("yeah, she like you");
    }
    else {
      reject("Naaah! You're shitt");
    }
  })
}, 2000);

console.log(p);

// consuming promises : then
p.then((value) => {
  console.log(`Message: ${value}`);
}, (err) => {
  console.log(`Message: ${value}`);
});

// consuming promises: then-catch
p.then((value) => {
  console.log(`Message: ${value}`);
})
  .catch((err) => {
    console.log(`Message: ${err}`);
  });

//until .then is not used the promise remain in pending state.
//after the is used it change state as per the command.

//promise chaining

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 200);
})

p1.then((value) => {
  console.log(value);
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2 resolved");
    }, 200);
  });
  return p2;
}).then((value) => {//from here on then are for promise 2.
  console.log("Done!");
  console.log(value);
}).then((value) => {
  console.log("Ok Now Done!");
})

function MaggiLekarAao() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let dukaanKhuliHai = true;
      if (dukaanKhuliHai) {
        resolve("Maggi milgyi");
      }
      else {
        reject("Maggi nhi milli");
      }
    }, 2000);
  })
}

MaggiLekarAao().then((value) => {
  console.log(value);
}).catch((err) => {
  console.log(err);
})