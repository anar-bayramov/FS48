// Task 01
// let group: (string | number)[] = [];
// let students: string[] = ["Anar", "Ceyhun", "Ilkin", "Murad", "Tural"];
// let ages: number[] = [23, 20, 25, 22, 24];
// students.push("Ramin");
// group.push(...students,...ages)
// console.log(group);

// Task02
// let user: [string, number, boolean];
// user = ["Anar", 23, true];
// console.log(user[0]);

// let user1: [string | number, number];

// Task03
// let product: {
//     id: number;
//     name: string;
//     price: number;
//     inStock: boolean;
//     description?: string;
// } = {
//     id: 1,
//     name: "Notebook",
//     price: 1900,
//     inStock: true,
// }

// product.price = 1700

// console.log(product);

// Task04
// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     pages: number;
//     available: boolean;
//     genre?: string;
// };

// let books: Book[] = [
//   {
//     id: 1,
//     title: "Səfillər",
//     author: "Viktor Hüqo",
//     pages: 1400,
//     available: true,
//     genre: "Roman",
//   },
//   {
//     id: 2,
//     title: "Parıltı",
//     author: "Stiven Kinq",
//     pages: 450,
//     available: false,
//     genre: "Qorxu",
//   },
//   {
//     id: 3,
//     title: "Quzuqulaqları Sessiyası",
//     author: "Tomas Harris",
//     pages: 380,
//     available: true,
//     genre: "Qorxu",
//   },
// ];

// let filter = books.filter(book => book.available === true);
// console.log(filter);

// Task05
// interface Person {
//   name: string,
//   age: number,
// };

// interface Employee extends Person{
//   salary: number,
//   department:string,
// };

// const user1: Employee = {
//   name: "Anar",
//   age: 23,
//   salary: 1400,
//   department: "IT",
// };

// const user2: Employee = {
//   name: "Elnur",
//   age: 25,
//   salary: 1600,
//   department:"HR"
// }

// const employes: Employee[] = [
//   user1,user2
// ]

// const employe = employes.map((e) => e.name)

// console.log(employe);

// Task 06
// interface Student {
//   id: number;
//   name: string;
//   age: number;
//   isActive: boolean;
// }

// type Course = {
//   title: string;
//   duration: number;
//   price: number;
// };

// type Contact = [string, number];
// let students: Student[] = [
//   {
//     id: 1,
//     name: "Anar",
//     age: 20,
//     isActive: true
// },
// {
//     id: 2,
//     name: "Elnur",
//     age: 22,
//     isActive: true
// },
// {
//     id: 3,
//     name: "Ramin",
//     age: 19,
//     isActive: false
// }
// ];

// const contacts: Contact[] = [
//   ["Anar", 501234567],
//   ["Elnur", 501234567],
//   ["Ramin", 501234567],
// ];

// const activeUser = students.filter((e) => e.isActive === true)
// const names = students.map((e) => e.name)
// const course: Course = {
//   title: "JavaScript",
//   duration: 30,
//   price: 250,
// }

// console.log("Student", students);
// console.log("Contact", contacts);
// console.log("ActiveUser", activeUser);
// console.log("Name", names);
// console.log("Course", course);



