// Task 01
// let numbers = [];
// numbers.push(5, 10,15,20)
// console.log(numbers);

// Task 02
// let numbers = [5, 10, 15, 20];
// let numbers1 = numbers.pop()
// console.log(numbers1);

// Task03
// let fruit = ["Banan", "Alma"];
// fruit.unshift("Gilas");
// console.log(fruit);

// Task 04
// let colors = ["Qirmizi", "Yasil", "Mavi"];
// colors.shift();
// console.log(colors);

// Task 05
// let num1 = [1, 2];
// let num2 = [3, 4];
// let fullArray = num1.concat(num2);
// console.log(fullArray);

// Task 06
// let str = ["a", "b", "c", "d", "e"];
// let str1 = str.slice(1, 3);
// console.log(str1);

// Task 07
// let numbers = [10, 20, 50, 60];
// numbers.splice(2,0,30,40);
// console.log(numbers);

// Tasj 08
// let language = ["JavaScript", "Pyton", "C++"];
// console.log(language.indexOf("Pyton"));

// Task 09
// let numbers = [5, 12, 8, 130, 44];
// console.log(numbers.includes(8));

// TAsk 10
// let language = ["HTML", "CSS", "JS"];
// console.log(language.join("-"));

// Task 11
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.reverse());

// Task 12
// let numbers = [40, 100, 1, 5, 25];
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// task 13
// let numbers = [1, 2, 3, 4];
// let num1 = numbers.map((numbers) => numbers * 2);
// console.log(num1);

// Task 14
// let numbers = [10, 15, 20, 25, 30];
// let num1 = numbers.filter((numbers) => numbers > 20);
// console.log(num1);

// Task 15
// let numbers = [5, 12, 8, 130, 44];
// let num1 = numbers.find((numbers) => numbers > 10);
// console.log(num1);

// Task 16
// let score = [45, 60, 75, 90];
// let score1 = score.findIndex((score) => score > 50);
// console.log(score1);

// TAsk 17
// let numbers = [5, 10, 15, 20];
// let num1 = numbers.reduce((sum, number) => sum + number, 0);
// console.log(num1);

// Task 18
// let numbers = [1, 2, 3, 2, 1, 2];
// let num1 = numbers.lastIndexOf(2);
// console.log(num1);

// Task 19
// let names = ["ali", "aysel", "mammad"];
// let newName = names.map((name) => name.toUpperCase());
// console.log(newName);

// Task 20
// let list = [
//     {name: "A", age: 16 },
//     {name: "B", age: 22 },
//     {name: "C", age: 19}
// ]
// let select = list.filter((list) => list.age >= 18);
// console.log(select);
// Task 21
// let fruit = ["Alma", "Banan", "Gilas", "Qarpız"];
// fruit.splice(1,2);
// console.log(fruit);

// Task 22
// let num1 = [15, 40];
// let num2 = [10, 30];
// let fullArray = num1.concat(num2);
// let fullSort = fullArray.sort((a, b) => b - a);
// console.log(fullSort);

// Task 23
// let numbers = [2, 3, 4];
// let num1 = numbers.reduce((total,number) => total * number,1);
// console.log(num1);

// Task 24
// let fruit = ["apple", "banana", "cherry", "date"];
// let search = fruit.filter((fruit) => fruit.includes("a"));
// console.log(search);

// TAsk 25
// let calculate = [
//     { name: "Körpük", price: 100 },
//     { name: "Ayaqqabı", price: 200 },
// ];
// let newTotal = calculate.map((calculate) => calculate.price * 1.18);
// console.log(newTotal);

// Task 26
// let list = [
//     { id: 101, title: "Xəbər 1" },
//     { id: 102, title: "Xəbər 2" }
// ];
// let select = list.find((list) => list.id === 102);
// console.log(select);

// Task 27
// let word = "javascript";
// let words = word.split("").reverse().join("");
// console.log(words);

// Task 28
// let numbers = [10, 20, 30, 40, 50, 60];
// let num1 = numbers.slice(-3);
// console.log(num1);

// Task 29
// let numbers = [12, 45, 2, 89, 34];
// let num1 = numbers.reduce((max, num) => Math.max(max, num));
// console.log(num1);

// Task 30
// let words = ["kitab", "qələm", "kompüter", "ev", "proqramlaşdırma"];
// let result = words.filter((word) => word.length > 5);
// console.log(result);

// Task 31
// const cart = [
//     { name: "Noutbuk", price: 1500, inStock: true },
//     { name: "Maus", price: 20, inStock: false },
//     { name: "Klaviatura", price: 80, inStock: true },
// ];

// const total = cart
//     .filter((product) => product.inStock === true)
//     .map((product) => product.price)
//     .reduce((sum, price) => sum + price, 0);
// console.log(total);

// Task 32
// let numbers = [1, 2, 2, 3, 4, 4, 5, 1];
// let num1 = numbers.filter((number, index) => {
//     return numbers.indexOf(number) === index;
// });

// console.log(num1);

// Task 34
// let numbers = [
//     [3, 9],
//     [1, 5],
//     [10, 2],
// ];

// let num1 = numbers
//     .reduce((total, current) => total.concat(current), [])
//     .sort((a, b) => a - b);

// console.log(num1);

// Task 35
// let users = [
//     { id: 1, name: "Əli", status: "pending" },
//     { id: 2, name: "Leyla", status: "pending" },
//     { id: 3, name: "Aysel", status: "pending" },
// ];
// let index = users.findIndex((user) => user.id === 2);
// users.splice(index, 1, {
//     id: 2,
//     name: "Leyla",
//     status: "approved",
// });

// console.log(users);
