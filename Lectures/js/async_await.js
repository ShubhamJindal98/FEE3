let url = "https://catfact.ninja/fact";

// async function getData()//async returns undefined as initially no api is fetched from url
// //hence it shows undefined  and then returns a promsie in asynchronous way
// {

//     let res1 =fetch(url);
//     console.log(res1.json);//async makes the promise undefined

//     let res= await fetch(url);//await will wait till data is finally fetched from api
//     //and then returns the promise
//     console.log(res);
// }


async function getData() {
  try {
    let res1 = await fetch(url);
    let res = await fetch(url);
  }
  catch (e) {
    console.log("error");
  }
}

getData();

// async helps in asyncronous execution of function whereas fetch executed data in syncronous way