// Task 01
// const student = {
//     fisrtName: "Eli",
//     lastName: "Eliyev",
//     age: 20,
//     city: "Baki"
// }
// console.log(student);

// Task 02
// const student = {
//         fisrtName: "Eli",
//         lastName: "Eliyev",
//         age: 20,
//         city: "Baki"
//     }
// console.log(student.fisrtName);
// console.log(student.age);
// student.age = 21;
// console.log(student.age);


// TAsk 03
// const student = {
//         fisrtName: "Eli",
//         lastName: "Eliyev",
//         age: 20,
//         city: "Baki"
// }
// student.isGraduated = false;
// delete student.city;
// console.log(student);


// Task 04
// const book = {
//     title: "1984",
//     author: "George Orwell",
//     pages: 328
// };

// console.log(book["title"]);
// console.log(book["author"]);
// console.log(book["pages"]);

// TAsk 05
// const car = {
//     brand: "BMW",
//     "fuel-type": "Benzin",
//     "user location": "Baki"
// }

// console.log(car["fuel-type"]);
// console.log(car["user location"]);

// Çünki JavaScript nöqtə notasiyasında (.) xüsusiyyət adlarının standart dəyişən adlandırma qaydalarına adların yalnız hərf, reqem ve digerleri ilə başlaması/davam etməsinə uyğun olmasını tələb edir.
// Əgər nöqtə ilə car.fuel-type yazsaq, JavaScript buradakı tire işarəsini (-) çıxma operatoru kimi başa düşür və "car.fuel çıxılsın type" əməliyyatını icra etməyə çalışaraq xəta (ReferenceError) verir.

// Task 06
// const laptop = {
//         brand : "Asus",
//         price : 1500,
//         ram: "16GB"
// }
// let myKey = "price";
// console.log(laptop[myKey]);

// Task 07
// const product = {
//         title: "Telefon",
//         price: 800
// }
// product ["price"] = 900;
// product ["color"] = "Qara"
// console.log(product);


// Task 08
// const user = {
//         username: "user123",
//         status: "active"
// }

// let targetKey = "status";
// user[targetKey] = "inactive";
// console.log(user);

// Task 09
// const movie = {
//   title: "Inception",
//   director: "Nolan",
//   "release-year": 2010
// };

// const title = movie.title;
// const releaseYear = movie["release-year"];

// console.log(`${title} filmi ${releaseYear} ilində nümayiş olunub.`);
