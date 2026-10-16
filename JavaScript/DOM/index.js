// Task 01
// const colorBox = document.querySelector("#colorBox");
// const colorBtn = document.querySelector("#colorBtn");

// const colors = ["red", "green", "blue"];
// let index = 0;

// colorBtn.addEventListener("click", function () {
//     colorBox.style.backgroundColor = colors[index];

//     index++;

//     if (index === colors.length) {
//     index = 0;
//     }
// });

// Task 02
// const cards = document.querySelectorAll(".card");

// cards.forEach(function (card) {
//   card.addEventListener("click", function () {
//     card.style.border = "2px solid red";
//   });
// });

// Task 03

// const circle = document.getElementById("circle");
// let isBig = false;

// circle.addEventListener("dblclick", function () {
//   if (isBig === false) {
//     circle.style.width = "160px";
//     circle.style.height = "160px";
//     isBig = true;
//   } else {
//     circle.style.width = "100px";
//     circle.style.height = "100px";
//     isBig = false;
//   }
// });


// Task 04

// const message = document.querySelector("#message");
// const counter = document.querySelector("#counter");

// message.addEventListener("input", function () {
//   const remaining = 100 - message.value.length;

//   counter.textContent = `Qalan simvol: ${remaining}`;
// });

// Task 05

// const colorSelect = document.querySelector("#colorSelect");

// colorSelect.addEventListener("change", function () {
//   document.body.style.backgroundColor = colorSelect.value;
// });

// Task 06

// const loginForm = document.querySelector("#loginForm");
// const username = document.querySelector("#username");

// loginForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   if (username.value.trim() === "") {
//     console.log("Xəta: Input boşdur!");
//   } else {
//     console.log("Uğurludur!");
//   }
// });

// Task 07

// const box = document.querySelector(".box");

// box.addEventListener("mouseenter", function () {
//   box.style.opacity = "0.5";
// });

// box.addEventListener("mouseleave", function () {
//   box.style.opacity = "1";
// });

// Task 09

// const input = document.querySelector("#input");

// input.addEventListener("keydown", function (e) {
//   if (e.key === "Enter") {
//     console.log("Enter düyməsinə basıldı!");
//   }
// });
