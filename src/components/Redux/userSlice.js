import { createSlice } from "@reduxjs/toolkit";
export const userSlice=createSlice({
    name:"size",
    initialState:{
        size:window.innerWidth
    },

    reducers:{
        update:(state,action)=>{
            state.size=action.payload.size;
        }
    }
})

export const {update}=userSlice.actions;
export default userSlice.reducer;