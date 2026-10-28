// TAsk 1
// function sehrliQutu(num) {
//     return new Promise((resolve, reject) => {
//         if (num === 7) {
//             resolve('Tebrikler');
//         } else {
//             reject("Teessufler olsun");
//         }
//     });
// }

// sehrliQutu(5)
//     .then((dogru) => {
//         console.log(`Ugurlu - ${dogru}`);
//     })
//     .catch((xeta) => {
//         console.log(`Ugursuz - ${xeta}`);
//     });

// Task 2
// async function balYoxla(bal) {
//     try {
//         if (bal < 0 || bal > 100) {
//             throw new Error("Yanlis bal daxil edildi");

//         }
//         if (bal >= 50) {
//             return "Imtahandan kecdin"
//         } else {
//             return "Kesildin"
//         }
//     } catch (xeta) {
//         console.log(`Xeta : ${xeta.message}`);

//     }
// }
// balYoxla(130)
//     .then((dogru) => {
//     if(dogru) console.log(dogru);

// })

// Task 3
// function sifarisVer(metbexHazirdirmi) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (metbexHazirdirmi) {
//         resolve("Sifarisiniz hazirdir nus olsun");
//       } else {
//         reject("Uzr isteyirik metbex");
//       }
//     }, 2000);
//   });
// }

// async function anaProqram(metbexHazirdirmi) {
//   try {
//     const netice = await sifarisVer(metbexHazirdirmi);
//     console.log(netice);
//   } catch (xeta) {
//     console.log("Xəta baş verdi:", xeta);
//   }
// }

// console.log("Sifariş verilir...");
// anaProqram(true);

// setTimeout(() => {
//   console.log("\nİkinci sifariş verilir...");
//   anaProqram(false);
// }, 3000);

// //Task 4
// const qardaş1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Əli finişə çatdı");
//   }, 2000);
// });

// const qardaş2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Vəli finişə çatdı");
//   }, 1000);
// });

// const qardaş3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Pirməmməd finişə çatdı");
//   }, 3000);
// });

// Promise.all([qardaş1, qardaş2, qardaş3])
//   .then((neticeler) => {
//     console.log(neticeler);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //Task 5 
// const task1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Task 1 tamamlandı.")
//   }, 3000);
// });
// const task2 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     reject(new Error("Task 2 yüklənmir."))
//   }, 1500);
// });
// const task3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Task 3 tamamlandı.")
//   }, 2000);
// });

// Promise.all([task1, task2, task3])
// .then(neticeler => {
//   console.log(neticeler);
// })
// .catch(error => {
//   console.log(error);
// })


//Qeyd :  Promise.all 
// Hər bir promise doğru olmalıdır ki nəticə versin içərisində 1i xəta verərsə bütün işi saxlayır xətanı verir
