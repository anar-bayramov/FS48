import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",

    initialState: {
        todos: [],
        filter: "all"
    },

    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: Date.now(),
                title: action.payload,
                completed : false,
            })
        }
    },
    revomeTodo: (state, action) => {
        state.todos = state.todos.filter((e)=>e.id !== action.payload)
    },

    toogleTodo: (state, action) => {
        state.todos = state.todos.find((e) => e.id === action.payload);
    },

    setFilter: (state, action) => {
        state.filter = action.payload
    },
})

export const { addTodo, revomeTodo, toogleTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;