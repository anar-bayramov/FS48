// Task 01
// const calculateTaxiFree = (distanceKM, isPeakHour, promoCode) => {
//     let total = 2 + (distanceKM * 0.8)

//     if (isPeakHour) {
//         total = total * 1.5
//     }
//     else if (promoCode === "AVTO10") {
//         total = total - 2;
//     }
//     else if (total < 3) {
//         total =  3;
//     }

//     return `yekun gedis haqqi: ${total} AZN`;
// };
// console.log(calculateTaxiFree(15, false, "AVTO10"));

// Task 02
// const score = (exam, quiz, attendance) => {
//     let totalScore = (exam * 0.6) + (quiz * 0.4);
//     if (totalScore >= 51 && attendance >= 70) {
//         return `Imtahandan kecdiniz! Yekun bal ${totalScore}`;
//     }
//     else if (totalScore >= 51 && attendance < 70) {
//         return "Kesildiniz : Davamiyyet yetersizdir!";
//     }
//     else {
//         return `Kesildiniz : Baliniz yetersizdir ${totalScore}`;
//     }
// }

// console.log(score(85, 75, 70));

// Task 03
// const printReceipt = (clientName, totalPrice, serviceFee) => {
//     return `Musteri: ${clientName} \nXidmet haqqi: ${serviceFee} Azn \nYekun odenis: ${totalPrice} Azn`
// }
// const processBill = (clientName, foodAmount, isVIP, callback) => {
//     let serviceFee;
//     if (isVIP) {
//         serviceFee = 0;
//     }
//     else {
//         serviceFee = foodAmount * 0.1
//     }
//     const totalPrice = foodAmount + serviceFee;
//     return callback(clientName, totalPrice, serviceFee)

// }

// console.log((processBill("Anar", 45,  false, printReceipt)));

// Task 04
// const onApproved = (monthlyPaymend) => {
//     return `Kredit tesdiqlendi! Ayliq odenisiniz: ${monthlyPaymend}`
// }
// const onNeedGuarantor = (gap) => {
//     return `Zamin teleb olunur! Catismayan ayliq gelir: ${gap} Azn`
// }
// const onRejected = (reason) => {
//     return `Kredit redd edildi! Sebeb: ${reason}`
// }

// const checkCredit = (salary, requestedAmount, months, onApproved, onNeedGuarantor, onRejected) => {
//     let monthlyPaymend = requestedAmount / months;
//     if (monthlyPaymend <= (salary * 0.5)) {
//         return onApproved(monthlyPaymend)
//     }
//     else if (monthlyPaymend < (salary * 0.7)){
//         const gap = monthlyPaymend - (salary * 0.5);
//         return onNeedGuarantor(gap)
//     }
//     return onRejected("Ayliq odenis gelirinize gore cox yuksekdir!")
// }

// console.log(checkCredit(1200, 2500, 12, onApproved, onNeedGuarantor, onRejected));
