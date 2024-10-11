//create a function movieDownloadFile, which take a argument url.Create a promise if url is not rejected else status 
//must be in resolve state.

// if(xyz != mp4){
//     //reject wali chalani hai
// }
// else {
//     //resolve wali chalani hai
// }

let filename = "abc.//.com/mp4";
let fileExtension = filename.split(".com/").pop();

function movieDownloadFile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fileExtension != "mp4") {
        reject("File can't be downloaded");
      }
      else {
        resolve("File is donwloaded");
      }
    }, 2000);
  })
}

movieDownloadFile().then((value) => {
  console.log(value);
}).catch((err) => {
  console.log(err);
});