import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
    name: "score",
    initialState: {
        value :0
    },

    reducers: {
        increment: (state) => {
            if (state.value < 100) {
                state.value += 10
                
            }
        },
        decrement: (state) => {
            if (state.value > 0) {
                state.value -= 10
                
            }
        },
        reset: (state) => {
            state.value = 0
        },
    
    }

})

export const { increment, decrement, reset } = scoreSlice.actions;
export default scoreSlice.reducer
