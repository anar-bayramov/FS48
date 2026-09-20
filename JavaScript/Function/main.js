// function levelKecdim(toplananXal, lazimOlanXal) {
//     if (toplananXal >= lazimOlanXal) {
//         console.log("Təbriklər, növbəti mərhələ açıldı!");
//     }
//     else {
//         console.log("Təəssüf, keçmək üçün hələ " + (lazimOlanXal - toplananXal) + " xal lazımdır!");
//     }
// }
// levelKecdim(90, 100)

// Task 01
// function calculateOrderTotal(price, promoCode) {
//     let total;
//     if (promoCode === "SAVE20") {
//         total = price * 0.80;
        
//     }
//     else if (promoCode === "FLAT10") {
//         total = price - 10;
        
//     }
//     else {
//         total = price;
        
//     }
//     const finalTotal = total * 1.18;
//     return finalTotal;
// }
// console.log(calculateOrderTotal(50, "FLAT10"));

// Task 02
// function registerUser(fullName, age) {
//     if (age < 18) {
//         return "Qeydiyyat üçün yaşınız minimum 18 olmalıdır.";
//     }
//     else {
//         const temizAd = fullName.trim();
//         return `Xoş gəldiniz, ${temizAd}! Qeydiyyat uğurla tamamlandı.`
//     }
// }
// console.log(registerUser("  Anar    ", 22));


// Task 03
// function calculateTaxiFare(distanceKM) {
//     let km = 1.50;
//     if (km * distanceKM <= 3) {
//         return "Ödəniləcək məbləğ: 3 AZN (Minimum gediş haqqı)";
//     }
//     else {
//         const mebleg = km * distanceKM
//         return `Ödəniləcək məbləğ: ${mebleg} AZN`;
//     }
// }
// console.log(calculateTaxiFare(7));
