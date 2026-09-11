// Task 01
// let number = +"15"; //prompt("Zehmet olmasa 2 reqemli eded daxil edin :");

// while (number < 100) {
//     number += 7
//     console.log(number);

// }

//Task 02
// let num = +"12"; //prompt("Yazini gormek istediyiniz sayi daxil edin :")
// let i = 1;

// while (i <= num) {
//     console.log("I know how to use cycles");
//     i++;
// }

//Task 03
// let number = 100

// while (number < 1000) {
//     console.log(number);
//     number+=10
// }

// Task 04
// let a = 10
// let total = 0
// while (a < 100) {
//     if (a % 2) {
//         total += a;
//     }
//     a++
// }
// console.log(total);

// Task 05
// let num = +"45" //prompt("3 reqemli istenilen eded daxil edin :");
// let total = 0;
// let i = 100
// while (i < 1000) {
//     if (!(i % num)) {
//         total += i;
//     }
//     i++
// }

// console.log(total);

//Task 06
// let n = +"45" //prompt("Bir ədəd daxil edin:");
// while (n > 1) {
//     let i = 1
//     let cnt = 0
//     while (i <= n) {
//         if (n % i === 0) {
//             cnt++;
//         }
//         i++
//     }
//     if (cnt === 2) {
//         console.log(n);
//     }
//     n--;
// }

//for
//Task 07
// let hasil = 1
// for (let i = 1; i <= 10; i++) {
//     hasil *= i;
// }
// console.log(hasil);

//Task 08
// let str = "Hello World";
// let result = ""
// for (let i = 0; i < str.length; i++) {
//     let index = str.length - 1 - i;
//     result += str[index]
// }
// console.log(result);

//Task 09
// let str = "Hell.o World";
// let index = -1;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === ".") {
//         index = i;
//         break
//     }
// }
// if (index !== -1) {
//     console.log(`Noqte buradadir :  ${index}`);

// }

//Task 10
// let str = "Baki Azerbaycan";
// let result = "Reqem yoxdur";
// for (let i = 0; i < str.length; i++){
//     if (!isNaN(str[i]) && str[i] !== ".") {
//         result = "Reqem var"
//         break;
//     }
// }
// console.log(result);

//Task 11
// let str = "level";
// let isPalendrom = "true";

// let text = str.toLowerCase();
// let leng = text.length;

// for (let i = 0; i < leng / 2; i++){
//     if (text[i] !== text[leng - 1 - i]) {
//         isPalendrom = false;
//         break;
//     }
// }
// console.log(isPalendrom);

//Task 12
// for (let i = 100; i <= 500; i++) {
//   if (i % 5 === 2) {
//     console.log(i);
//   }
// }

//Task 13
// let num = "-455";
// let sum = 0;

// for (let i = 0; i < num.length; i++){
//     if (num[i] === "-") {
//         continue;
//     }
//     sum +=  +num[i];
// }
// console.log(sum);

//Task 14
// let num = +"45";

// for (let i = num; i >= 1; i--) {
//     if (num % i === 0) {
//         console.log(i);
        
//     }
// }

//Task 15
// for (let i = 1; i <= 47; i++){
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//     }
// }


//TAsk 16
// let text = "Test";
// let result = "";

// for (let i = 0; i < text.length; i++){
//     result += text[i];
//     if (i !== text.length -1) {
//         result += "-";
//     }
// }
// console.log(result);

//Task 17
// let input = "Ba ku A zer ba ijan"
// let total = 0;
// for (let i = 0; i < input.length; i++) {
//     if (input[i] === " ") {
//         total++;
//     }
// }

// console.log(total);


//Task 18
// let num = +"10";
// let num1 = +"20";

// let min = Math.min(num, num1);
// let max = Math.max(num, num1);

// for (let i = min; i <= max; i++){
//     console.log(i*i);
    
// }