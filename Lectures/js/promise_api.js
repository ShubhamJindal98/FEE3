let url = "https://catfact.ninja/fact"

//1.1 returning a promise
//console.log(fetch(url));//by default fetch returns data in form of promise from api.
//hence to access data in api(promise), we will use then command from promise


//1.2 accessing json data
// fetch(url).then((res)=>{
//     //console.log(res);
//     //console.log(res.json());
//     res.json().then((data)=>{
//         console.log(data);
//     });
// })
// .catch((err)=>{
//     console.log(Wrong api data + ${err});
// });



//2.1 chaining of promise

fetch(url).then((res) => {
  return res.json();
}).then((data) => {
  console.log(data);
})
  .catch((err) => {
    console.log(`Wrong api data + ${err}`);
  });