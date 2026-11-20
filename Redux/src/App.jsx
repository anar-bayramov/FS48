// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, reset } from "./Redux/counterSlice";
// function App() {
//     const count = useSelector(
//         (state) => state.counter.value
//     );

//     const dispatch = useDispatch();

//     return (
//       <div>
//         <h1>{count}</h1>

//         <button onClick={() => dispatch(increment())}>Artir</button>
//         <button onClick={() => dispatch(decrement())}>Azalt</button>
//         <button onClick={() => dispatch(reset())}>Sifirla</button>
//       </div>
//     );
// }

// export default App

// ==============Task 02==============

// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { changeName } from "./Redux/userSlice";
// function App() {
//   const [userName, setUserName] = useState("");
//   const name = useSelector((state) => state.user.value);
//   const dispatch = useDispatch();

//   const handeChange = () => {
//     if (userName.trim() !== "") {
//       dispatch(changeName(userName.trim()));
//       setUserName("");
//     }
//   };

//   return (
//     <div>
//       <h1>Istifadeci : {name}</h1>

//       <input
//         type="text"
//         placeholder="Yeni adinizi daxil edin..."
//         value={userName}
//         onChange={(e) => setUserName(e.target.value)}
//       />

//       <button onClick={handeChange}>Deyis</button>
//     </div>
//   );
// }

// export default App;

// ==============Task 03==============

// import { useSelector, useDispatch } from "react-redux";
// import { toogleTheme } from "./Redux/toogleTheme";

// function App() {
//   const theme = useSelector((state) => state.theme.value);

//   const dispatch = useDispatch();

//   return (
//     <div
//       style={{
//         backgroundColor: theme === "light" ? "white" : "black",
//         color: theme === "light" ? "black" : "white",
//         padding: "50px",
//         minHeight: "100vh",
//       }}
//     >
//       <h1>{theme.toUpperCase()} MODE</h1>

//       <button onClick={() => dispatch(toogleTheme())}>Mövzunu dəyiş</button>
//     </div>
//   );
// }

// export default App;

// ==============Task 04==============

// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, reset } from "./Redux/score";
// function App() {
//     const count = useSelector(
//         (state) => state.score.value
//     );

//     const dispatch = useDispatch();

//     return (
//       <div>
//         <h1>{count}</h1>

//         <button onClick={() => dispatch(increment())}>Artir</button>
//         <button onClick={() => dispatch(decrement())}>Azalt</button>
//         <button onClick={() => dispatch(reset())}>Sifirla</button>
//       </div>
//     );
// }

// export default App


// ==============Task 05==============

import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { addTodo, revomeTodo, toogleTodo, setFilter } from './Redux/todoSlice';

function App() {
  const [input, setInput] = useState();
  const [todos, setTodos] = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim() !== "") {
      dispatch(addTodo(input))
      setInput("")
    }
  }
}

return (
  <div>

  </div>
)

export default App