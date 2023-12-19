// function getById(id) {
//   let request = new XMLHttpRequest();
//   request.open("GET", "https://dummyjson.com/products/" + id);
//   request.send();
//   request.addEventListener("load", function () {
//     let data = JSON.parse(this.responseText);
//     console.log(data);
//   });
// }
// getById(1);

// fetch("https://dummyjson.com/products/")
//   .then(
//     (response) => response.json(),
//     (error) => console.log(error)
//   )
//   .then(
//     ({ products }) => {
//       console.log(products);
//     },
//     (error) => console.log(error)
//   );
// fetch("https://dummyjson.com/users").thes((response) => {
//   return response.json();
// });

// fetch("https://dummyjson.com/users/")
//   .then(
//     (response) => response.json()
//     // (error) => console.log(error)
//   )
//   .then(({ users }) => {
//     console.log(users[0]);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// //   .catch((error) => {
// //     console.log(error);
// //   })

// let prom = new Promise((resolve, reject) => {
//   if (new Date() < new Date("12/03/2024")) {
//     reject("error");
//   }
//   resolve("Success");
// });

// prom
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// let prom = new Promise((response, reject) => {
//   if (new Date("21/05/2009") < new Date("21/05/2025")) {
//     reject("error");
//   }
//   response("Success");
// }).then((response) => {
//   response.json();
// })
// console.log(prom);
// async function myFatch() {
//   try {
//     await fetch("https://dummyjson.com/usersq/")
//       .then((response) => response.json())
//       .then(({ users }) => console.log(users));
//   } catch (e) {
//     console.error(e);
//   }
// }

// myFatch();
// async function myFetch() {
//   try {
//     await fetch("https://dummyjson.com/users/")
//       .then((response) => {
//         return response.json();
//       })
//       .then(({ users }) => console.log(users[0]));
//   } catch (e) {
//     console.error(e);
//   } finally {
//     console.log("Finally");
//   }
// }
// myFetch();
// async function myFetch() {
//   try {
//     let response = await fetch("https://dummyjson.com/users/");
//     let data = await response.json();
//     return data;
//   } catch (e) {
//     console.error(e);
//     throw e;
//   }
// }
// myFetch()
//   .then((data) => console.log(data))
//   .catch((e) => {
//     console.log(e);
//   });
