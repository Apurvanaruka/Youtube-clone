import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {chat : []},
    reducers: {
        addChat: (state, action) => {
            state.chat.splice(20,20)
            state.chat.unshift(action.payload);
        }
    }
})

export const {addChat} = chatSlice.actions;

export default chatSlice.reducer;


