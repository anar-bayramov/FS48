// Task 01
// const car = {
//     brand: "Toyota",
//     model: "Corolla"
// };
// car.year = "2020";
// car.model = "Camry";
// console.log(car);

// Task 02
// const user = {
//     name: "Kamran",
//     email: "kamran@mail.com",
//     tempToken:"abc123"
// }
// delete user.tempToken;
// console.log(user);

// Task 03
// const person = {
//     fisrtName: "Aysel",
//     lastName: "Memmedova",
//     getFullName: function () {
//         return this.fisrtName + " " + this.lastName
//     }
// }

// console.log(person.getFullName());

// Task 04
// const laptop = {
//     brand: "Dell",
//     price: "1800",
//     ram: "16GB",
//     storage:"512GB SSD"
// }
// const laptopKeys = Object.keys(laptop);
// console.log(laptopKeys);

// Task 05
// const product = {
//     title: "Qulaqliq",
//     price: 150,
//     inStock: true
// }
// const productKeys = Object.values(product);
// console.log(productKeys);

// Task 06
// const country = {
//     name: "Azerbaycan",
//     capital: "Baki",
//     population:"10M"
// }
// const countryKey = Object.entries(country);
// console.log(countryKey);

// Task 07
// function User(username,role) {
//     this.username = username;
//     this.role = role;
// }

// let user1 = new User("Anar", "admin");
// let user2 = new User("Kamran", "mod")

// console.log(user1);
// console.log(user2);

// Task 08
// function Rectangle(widht, height) {
//     this.widht = widht;
//     this.height = height;
//     this.getArea = function () {
//         return this.widht * this.height
//     };
// }
// let Rectangle1 = new Rectangle(10, 15);
// console.log(Rectangle1.getArea());

// Task 09
// const student = {
//     id: 101,
//     score: 85,
//     status: "pedding"
// }

// const keyToUpdate = "score";
// const keyToDelete = "status";

// student[keyToUpdate] = 95;
// delete student[keyToDelete];
// console.log(student);

// Task 10
// const bankAccount = {
//     owner: "Elvin",
//     balance: 500,

//     deposit(amount) {
//         this.balance += amount;
//         console.log(`${amount}Azn elave edildi`);
//     },

//     withdraw(amount) {
//         if (this.balance < amount) {
//             console.log("Balasniniz azdir");

//         } else {
//             this.balance -= amount;
//             console.log(`${amount}Azn cixarildi`);

//         }
//     }
// };

// bankAccount.deposit(250);
// bankAccount.withdraw(340);
// console.log(`${bankAccount.balance}Yekun mebleg`);

// Task 11
// const calculate = {
//     a: 10,
//     b: 5
// };

// calculate.add = function () {
//     return this.a + this.b;
// };

// calculate.subtract = function(){
//     return this.a - this.b;
// };

// console.log(calculate.add());
// console.log(calculate.subtract());

// Taskm 12
// function countProperties(obj) {
//     return Object.keys(obj).length
// }

// const student = {
//     name: "Elvin",
//     age: 25,
//     city: "Baki"
// };

// console.log(countProperties(student));

// Task 13
// const cart = {
//     apple: 3,
//     banana: 2,
//     milk: 5,
//     bread: 1,
// };
// let totalCount = 0;
// for (const count of Object.values(cart)) {
//     totalCount += count;
// }
// console.log(totalCount);

// Task 14
// const scores = {
//     math: 90,
//     english: 85,
//     physics: 78,
// };

// for (const [subject, score] of Object.entries(scores)) {
//     console.log(`Fənn: ${subject}, Bal: ${score}`);
// }

// Task 15
// const entries = [
//     ["title", "JavaScript Dərsləri"],
//     ["duration", "2 saat"],
//     ["level", "Orta"],
// ];
// const course = Object.fromEntries(entries);
// course.isCompleted = true;
// console.log(course);

// TAsk 16
// function Product(title, price, discount = 0) {
//   this.title = title;
//   this.price = price;
//   this.discount = discount;
//   this.getFinalPrice = function () {
//     return this.price - (this.price * this.discount / 100);
//   };
// }

// const product1 = new Product("Telefon", 1800, 15);
// const product2 = new Product("Komputer", 2500);
// console.log(product1.getFinalPrice());
// console.log(product2.getFinalPrice());

// Task 19
// function Student(name,grades=[]) {
//   this.name = name;
//   this.grades = grades;

//   this.addGrade = function (grade) {
//     this.grades.push(grade);
//   };

//   this.getAverage = function () {
//     if (this.grades.length === 0) {
//       return 0
//     }
//     const total = this.grades.reduce((sum, grade) => {
//       return sum + grade;

//     }, 0);
//     return total / this.grades.length;
//   }

// }
// const student1 = new Student("Eli");
// student1.addGrade(80);
// student1.addGrade(90);
// student1.addGrade(100);

// console.log(student1.name);
// console.log(student1.grades);
// console.log(student1.getAverage());


// Task 20
// const store = {
//   inventory: {
//     phone: 10,
//     laptop: 5,
//     tablet: 8,
//   },

//   sellItem(itemName, quantity) {
//     if (this.inventory[itemName] && this.inventory[itemName] >= quantity) {
//       this.inventory[itemName] -= quantity;
//       console.log(
//         `Uğurlu satış: ${quantity} ədəd ${itemName} satıldı. Qaldı: ${this.inventory[itemName]}`,
//       );
//     } else {
//       console.log(
//         `Xəbərdarlıq: Anbarda kifayət qədər ${itemName} yoxdur və ya məhsul mövcud deyil!`,
//       );
//     }
//   },

//   addItem(itemName, quantity) {
//     if (this.inventory[itemName]) {
//       this.inventory[itemName] += quantity;
//     } else {
//       this.inventory[itemName] = quantity;
//     }
//     console.log(
//       `Əlavə olundu: ${quantity} ədəd ${itemName}. Ümumi say: ${this.inventory[itemName]}`,
//     );
//   },

//   listInventory() {
//     console.log("- Anbarda olan məhsullar -");
//     for (const [item, count] of Object.entries(this.inventory)) {
//       console.log(`${item}: ${count} ədəd`);
//     }
//   },
// };

// store.sellItem(`phone`, 8);
// store.addItem(`laptop`, 4);
// store.listInventory();
