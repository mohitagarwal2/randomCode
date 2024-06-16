// setTimeout(() => {
//   console.log("haanji");
// }, 2000);
// console.log("hello");
// function saveTOdb(data) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     console.log("your data was saved", data);
//   } else {
//     console.log("your data not saved internet speed slow");
//   }
// }
// saveTOdb("mohit");

function saveTOdb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("your data was saved", data);
    } else {
      reject("your data not saved internet speed slow");
    }
  });
}
saveTOdb("apna college")
  .then((result) => {
    console.log("promise was resolved", result);
    return saveTOdb("hello world");
  })
  .then((result) => {
    console.log("data2 was saved ", result);
  })
  .catch((error) => {
    console.log("Promise not resolved", error);
  });
