import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "Jatin",
    initialState: [],
    reducers: {
        addUser(state, action){
            state.push(action.payload);
         },
        removeUser(state, action){
            state.splice(action.payload, 1);
        },
        deleteUsers(state, action){
            return [];
        },
    },
})

export default userSlice;
export const {addUser, removeUser, deleteUsers} = userSlice.actions;