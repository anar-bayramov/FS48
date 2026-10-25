// Task 01
// const form = document.getElementById("userProfile");
// const fullName = document.getElementById("fullName");
// const age = document.getElementById("age");
// const email = document.getElementById("email");

// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     if (age.value >= 18 && fullName.value !== "" && email.value !== "") {
//         alert("Profil Yenilendi")
//     }
//     else {
//         alert("Melumatlari duzgun daxil edin!");
//     }
// });

// Task 02
// const form = document.getElementById("password");
// const oldPassword = document.getElementById("oldPassword")
// const newPassword = document.getElementById("newPassword")
// const restPassword = document.getElementById("restPassword");

// let password = "123";
// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     if (oldPassword.value === password &&
//         newPassword.value === restPassword.value) {
//         alert("Sifreniz deyisdi")
//     }
//     else {
//         alert("Sifrenizi duzgun daxil edin")
//     }
// })

//  Task 08
// const range = document.getElementById("range");
// const price = document.getElementById("price");
// range.addEventListener("click", function () {
//     price.textContent = this.value
// })

// Task 09
// const range1 = document.getElementById("range1");
// const range2 = document.getElementById("range2");
// const range3 = document.getElementById("range3");
// const range4 = document.getElementById("range4");
// const range5 = document.getElementById("range5");

// const ranges = [range1, range2, range3, range4, range5];
// ranges.forEach((range, index) => {
//     range.addEventListener("change", function () {
//         ranges.forEach((item, i) => {
//             item.checked = i <= index;
//         });
//     });
// });

// Task 10
// const email = document.getElementById('email');
// const form = document.getElementById("subscribe");

// form.addEventListener('submit', function () {
//     if (email.value == "" && email.includes("@")) {
//       alert("Emailiniz daxil edin");
//     }
// })
