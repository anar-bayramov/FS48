// import { configureStore } from "@reduxjs/toolkit";

// import  counterReduxer  from "./counterSlice";

// export const store = configureStore({
//     reducer: {
//         counter: counterReduxer
//     }
// })

// ==============Task 02==============
// import { configureStore } from "@reduxjs/toolkit";

// import userReducer from "./userSlice";

// export const store = configureStore({
//     reducer: {
//         user: userReducer
//     }

// })

// ==============Task 03==============

// import { configureStore } from "@reduxjs/toolkit";
// import themeReducer from "./toogleTheme";

// export const store = configureStore({
//   reducer: {
//     theme: themeReducer,
//   },
// });

// ==============Task 04==============

import { configureStore } from '@reduxjs/toolkit'
import scoreReducer from './score'

export const store = configureStore({
    reducer: {
        score : scoreReducer
    }
})