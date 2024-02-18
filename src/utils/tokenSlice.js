import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name:'accessToken',
    initialState:
    {
	accessToken: "",
	isLogin: false,
    },
    reducers: {
	addToken: (state, action ) => {
	    state.accessToken=action.payload.access_token
	    state.isLogin = (action.payload.authuser === "0")
	},

    }

})

export const {addToken, islogin} =  tokenSlice.actions;
export default tokenSlice.reducer;

