// Task 01
// const sendEmail = () => {
//   console.log("Xoş gəldiniz məktubu göndərildi!");
// };

// const registerUser = (username, callback) => {
//   console.log(`${username} sistemə əlavə olundu.`);
//   callback();
// };

// registerUser("Anar", sendEmail);

// Task 02
// const onSuccess = (finalPrice) => {
//   console.log(`Kupon tətbiq edildi! Yekun qiymət: ${finalPrice} AZN`);
// };

// const onError = (msg) => {
//   console.log(`msg`);
// };

// const applyCoupon = (code, totalPrice, onSuccess, onError) => {
//   if (code === "KOD10") {
//     const finalPrice = totalPrice - 10;
//     onSuccess(finalPrice);
//   } else {
//     onError("Keçərsiz kupon kodu!");
//   }
// };

// applyCoupon("KOD10", 35, onSuccess, onError);

// Task 03
// const onWin = (heroName, damage) => {
//   console.log(`${heroName} qalib gəldi! Canavardan ${damage} xal üstün oldu!`);
// };

// const onLose = (heroName, damage) => {
//   console.log(`${heroName} uduzdu! Canavardan ${damage} xal geridə qaldı!`);
// };

// const onDraw = () => {
//   console.log("Güclər bərabərdir! Döyüş bərabərə bitdi.");
// };

// const attackMonster = (heroName, heroPower, monsterPower, onWin, onLose, onDraw) => {
//   if (heroPower > monsterPower) {
//       onWin(heroName, heroPower - monsterPower);
//   }
//   else if (heroPower < monsterPower) {
//       onLose(heroName, monsterPower - heroPower);
//   }
//   else {
//       onDraw();
//   }
// };

// attackMonster("Batman", 70, 70, onWin, onLose, onDraw);