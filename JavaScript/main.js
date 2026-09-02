// Task 1
console.log("My name is Anar");
// Task 2
let name = "Anar";
console.log(name);
//  Task 3
// 1,2,4,5 xaric digerleri istifade edile biler
// Task 4
let bookPrice = 12;
let bookAmount = 30;
let totalPrice = bookPrice * bookAmount;
console.log(totalPrice);
// Task 5
let kmhSpeed = 90;
let msSpeed = 6.5 / kmhSpeed;
console.log(msSpeed);
// Task 6
let day = "2000"; //prompt("Zəhmət olmasa doğum gününüzü qeyd edin");
let age = "2026" - Number(day);
let days = age * "365";
console.log(days);
// Task 7
let num = 17;
let arti = num * 5;
let qaliq = num % 3;
console.log(`Dərəcə qüvvəti : ${arti}`);
console.log(`Bölgüdən qalan qalıq : ${qaliq}`);
// Task 8
let firstName = "Anar";
let lastName = "Bayramov";
console.log(`Sizin adınız ${firstName} ${lastName}. Tanışlığımıza çox şadam!`);
// Task 9
console.log(`Sizi bir daha görməyimizə şadıq, ${[firstName]} ${lastName}`);
// Task 10
let fullName = "Anar Bayramov";
let letterCount = fullName.replaceAll("", " ").length;
console.log(letterCount);

//Task 11
let ilkad = "Anar Bayramov"; //prompt(`Zehmet olmasa adinizi ve soyadinizi daxil edin :`).split(" ");
console.log(`Ilk herf : ${ilkad[0].charAt(0)}  ${ilkad[1].charAt(0)}`);

// Task 12
let full_Name = "Anar Bayramov"; //prompt("Zəhmət olmasa tam adınızı -Ad Soyad- formatına uygun daxil edin:");
let parts = full_Name.trim().split(" ");

let ad = parts[0];
let soyad = parts[1];

console.log(soyad + " " + ad);

// Task 13
let fname = "Anar";
let hello = `Salam ${fname} !`;
console.log(hello);

// Task 14
let num1 = 14;
let num2 = 8;
let cem = num1 + num2;
let ferq = num1 - num2;
let hasil = num1 * num2;
let bolme = num1 / num2;

console.log(`Cem : ${cem}`);
console.log(`Ferq : ${ferq}`);
console.log(`Hasil : ${hasil}`);
console.log(`Bolme : ${bolme}`);

// Task 15
let number1 = 12345;
let number2 = 98765;
let hasil2 = number1 * number2;
let str = String(hasil2);
let say = str[6];
console.log(say);

//Task 16
//10 ; -1 ; NaN ; 2; 45px ; $45 ; 2 ; NaNpx ; Infinity ; -95 ; -13 ; 1 ; NaN08:45

//Task 17
let deyer = "2525"; //prompt("4reqemli eded daxil edin :");
let total = 0;
let i = 0;
for (let i = 0; i < deyer.length; i++) {
  total += Number(deyer[i]);
}
console.log(total);

//Task 18
let ad1 = "Bayramov Anar"; //prompt("Soyadinizi ve Adinizi yazin");
console.log(`Salam ${ad1} !`);

//Task 19
let price = "290.45"; //prompt("Mehsul qiymetini qeyd edin meselen(290.40):").split(".");
console.log(`Mehsul qiymeti : ${price[0]}manat ${price[1]}qepik`);

//Task 20
// let pul = prompt("Zehmet olmasa emek haqqinizi daxil edin :");
// let pul1 = Number(pul);
// let xalisMaas = pul * 0.87;
// console.log(xalisMaas);

//Task 21
// let ada = prompt("Zehmet olmasa Ad Soyad Ata adinizi qeyd edin :").split(" ");
// console.log(`${ada[1]} ${ada[0].charAt(0)}. ${ada[2].charAt(0)}.`);

//Task 22
// let mebleg = prompt("Əmanətin məbləğini daxil edin (AZN):");
// let faiz = prompt("İllik 12-36% aralığında faiz dərəcəsini daxil edin :");
// let muddet = prompt("Əmanətin müddətini qeyd edin (İL) olaraq :");

// let menfeet = (mebleg * faiz * muddet) / 100;
// let umumi = Number(mebleg) + Number(menfeet);
// console.log(`Ümumi məbləğ : ${umumi}`);

//Task 23
value = 10;
console.log(value == 10);   // true
console.log(value === 10);  // true
console.log(value < 15);    // true
console.log(value <= 10);   // true
console.log(value != 20);   // true

value = 20;
console.log(value == 10);   // false
console.log(value === 10);  // false
console.log(value < 15);    // false
console.log(value <= 10);   // false
console.log(value != 20);   // false

//Task 24
let hbd = "18" //prompt("Yaşını qeyd edin :")
if (hbd >= 18) {
    alert("Access granted");    
}
else {
    alert("Access denied");
}

//Task 25
let input = prompt("Ardıcıl 3 ədədi boşluqlarla daxil edin :");
let ededler = input.split(" ");
let a = Number(ededler[0]);
let b = Number(ededler[1]);
let c = Number(ededler[2]);

if (a == b || b == c || a == c) {
    console.log("Eyni ədəd təkrarlana bilməz");
}
else {
    let enBoyuk = Math.max(a, b, c)
    let enKicik = Math.min(a, b, c)
    let ortaEded = a + b + c - enBoyuk - enKicik;
    console.log(`Orta Ədəd : ${ortaEded}`);
}

//Task 26 
let il = Number(prompt("Bir il daxil edin:"));

if (il % 4 === 0) {
    console.log("İl uzun ildir");
} else {
    console.log("İl uzun il deyil");
}