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
function sifarisVer(metbexHazirdirmi) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (metbexHazirdirmi) {
        resolve("Sifarisiniz hazirdir nus olsun");
      } else {
        reject("Uzr isteyirik metbex");
      }
    }, 2000);
  });
}

async function anaProqram(metbexHazirdirmi) {
  try {
    const netice = await sifarisVer(metbexHazirdirmi);
    console.log(netice);
  } catch (xeta) {
    console.log("Xəta baş verdi:", xeta);
  }
}

console.log("Sifariş verilir...");
anaProqram(true);

setTimeout(() => {
  console.log("\nİkinci sifariş verilir...");
  anaProqram(false);
}, 3000);