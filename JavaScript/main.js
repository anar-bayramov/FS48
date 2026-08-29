console.log("My name is Anar");

let name = "Anar";
console.log(name);

// 1,2,4 xaric digerleri istifade edile biler

let bookPrice = 12;
let bookAmount = 30;
let totalPrice = bookPrice * bookAmount;
console.log(totalPrice);

let kmhSpeed = 90;
let msSpeed = 6.5 / kmhSpeed;
console.log(msSpeed);

let day = prompt("Zəhmət olmasa doğum gününüzü qeyd edin");
let month = prompt("Zəhmət olmasa doğum ayınızı qeyd edin");
let yearh = prompt("Zəhmət olmasa doğum ilinizi qeyd edin");
console.log(day, month, yearh);
let hbd = new Date(Number(yearh), Number(month) - 1, Number(day));
let now = new Date();
let age = now.getFullYear() - hbd.getFullYear();
console.log(`Sizin ${age} yaşınız var`);
let only = age * 365;
console.log(`Siz ${only} gündür yaşayırsınız`);

let num = 17
let arti = num * 5;
let qaliq = num % 3
console.log(`Dərəcə qüvvəti : ${ arti }`);
console.log(`Bölgüdən qalan qalıq : ${qaliq}`);

let firstName = "Anar";
let lastName = "Bayramov";
console.log(`Sizin adınız ${firstName} ${lastName}. Tanışlığımıza çox şadam!`);

console.log(`Sizi bir daha görməyimizə şadıq, ${[firstName]} ${lastName}`);

