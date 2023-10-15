import { createSlice } from "@reduxjs/toolkit";


const main = createSlice({
    name : "main",
    initialState : {
        name : "name"
    },
    reducers : {
    setname  (state,action){

                state.name = action.payload

        }
    }
})


export const {setname} = main.actions;
export default main.reducer