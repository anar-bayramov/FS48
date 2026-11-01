// Task 01
// import { products } from "./db";
// import { useState } from "react";
// export default function Prod() {
//   const [count, setCount] = useState(0);
//   const handPrev = () => {
//     if (count > 0) {
//       setCount(count - 1);
//       console.log("Index deyisdi :", count);
//     }
//   };

//   const handNext = () => {
//     if (count < products.length - 1) {
//       setCount(count + 1);
//       console.log("Index deyisdi:", count);
//     }
//   };

//   return (
//     <div style={{ padding: "15px" }}>
//       <h3>Mehsul Siyahisi</h3>
//       <div style={{ border: "2px solid #000", width: "200px", textAlign:"center"}}>
//         <h4>{products[count].name}</h4>
//         <p>Qiymet : {products[count].price}Azn</p>
//         <p>Kategoriya: {products[count].category}</p>
//       </div>

//       <div style={{ marginTop: "20px" }}>
//         <button onClick={handPrev}>Geri</button>
//         <button onClick={handNext}>Ireli</button>
//       </div>
//     </div>
//   );
// }

// TAsk 02
// export default function Prod() {
//     const notif = () => {
//         alert("Salam!")
//     }
//     const log = () => {
//         console.log("Salam!");

//     }

//     return (
//         <div>
//         <button onClick={notif}>Alert</button>
//         <button onClick={log}>Console.log</button>
//       </div>
//     );
// }
