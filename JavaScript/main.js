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
let hbd = +"18" //prompt("Yaşını qeyd edin :")
if (hbd >= 18) {
    console.log("Access granted");
    //alert("Access granted");    
}
else {
    console.log("Access denied");
    //alert("Access denied");
}

//Task 25
let input = "25 64 34" //prompt("Ardıcıl 3 ədədi boşluqlarla daxil edin :");
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
let il ="25" //Number(prompt("Bir il daxil edin:"));

if (il % 4 === 0) {
    console.log("İl uzun ildir");
} else {
    console.log("İl uzun il deyil");
}

//Task 27
let id = +"2" //prompt("Reqem olaraq deyer girin : ");
switch (id) {
    case 1:
        console.log("Available 10 pcs.");
        break;
    case 2:
        console.log("Available 256 pcs.");
        break;
    case 3:
        console.log("Available 53 pcs.");
        break;
    case 4:
        console.log("There are 3 available.");
        break;
        
    default:
        console.log("Out of stock");
}

//Task 28
let gender = "male"; //prompt("Zehmet olmasa cinsinizi M ve ya F ile belli edin :");
if (gender === "M" || gender === "Male" || gender === "male") {
    console.log("Male");
}else if (gender === "F" || gender === "FeMale" || gender === "female" || gender === "Female") {
    console.log("FeMale");
}
else {
    console.log("Order");
}

//Task 29
let months = +"10"; //prompt("Zhmet olmasa ayin nomresini daxil edin :");
let list = 
    ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"]
if ((months >= 1) & (months <= 12)) {
  console.log(list[months - 1]);
} else {
  console.log("Zehmet olmasa duzgun qeyd edin");
}

// Task 30
let date ="2009.12.19" //prompt("Zehmet olmasa dogum tarixinizi qeyd edin. Meselen : «2009.12.19»");
let date1 = date.split(".")
let list_date = 
    ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"]
if ((date1[1] >= 1) & (date1[1] <= 12)) {
    console.log(`${date1[2]} ${list[date1[1] - 1]} ${date1[0]}-cu il`);
}
else {
    console.log("Yanlış dəyər daxil edilib");
}

//Task 34
let number = +"" //prompt("Dəyər daxil edin :")

    if (number > 0) {
        console.log("Müsbət ədəddir");
    } else if (number < 0) {
        console.log("Mənfi ədəddir");
    } else {
        console.log("Ədəd sıfırdır");
}
    
//Task 35
let numb = "2 10 6" //prompt("3 ferqli deyer daxil edin");
let numb_list = numb.split(" ")
let a1 = +numb_list[0];
let b1 = +numb_list[1];
let c1 = +numb_list[2];

if (a1 === b1 || b1 === c1 || a1 === c1) {
    console.log("Eyni ədəd təkrarlana bilməz");
}
else {
    let enBoyuk1 = Math.max(a1, b1, c1);
    console.log(enBoyuk1);
}
 
//Task 36
let nmb = "45" //prompt("Deyer daxil edin");
let nmb1 = (nmb % 2 === 0) ? "Cut ededdir" : "Tek ededdir";
console.log(nmb1);

//Task 37
let a3 = 8;
let perimert = 4 * a3;
let sahe = a3 ** 2;
console.log(perimert);
console.log(sahe);

//TAsk 38
let score ="45" //+prompt("Xalinizi daxil edin :");
switch (true) {
    case (score >= 90 && score <= 100):
        console.log("Əla");
        break;
    case (score >= 75 && score <= 89):
        console.log("Yaxşı");
        break;
    case (score >= 60 && score <= 74):
        console.log("Orta");
        break;
    case (score >= 0 && score <= 59):
        console.log("Zəif");
        break;

    default:
        console.log("Duzgun deyer girin");
}

//Task 39
let random_numb = Math.floor(Math.random()*51);
let numb3 = random_numb;
if (random_numb >=0 & random_numb <= 50) {
    console.log("secilen eded dogrudur !");
    console.log(numb3);
}
else {
    console.log("Duzgun deyer yaradin");
}

let a4 = 5, b4 = 3, op = "*";
let numb_total;

switch (op) {
    case "+":
        numb_total = a4 + b4;
        break;
    case "-":
        numb_total = a4 - b4;
        break;
    case "*":
        numb_total = a4 * b4;
        break;
    case "/":
        numb_total = (b4 !== 0) ? a4 / b4 : "Sifira bolmek olmaz";
        break;
    default:
        numb_total = "Duzgun operator daxil edilmeyib";
}

console.log(`Nəticə: ${numb_total}`); 