import { createSlice } from "@reduxjs/toolkit";

const appMenu = createSlice({
    name: 'toggle',
    initialState:
    {
        showMenu: true
    },
    reducers: {
        toggleMenu: (state) => {
            state.showMenu = !state.showMenu
        }
    }
});

export const { toggleMenu } = appMenu.actions;

export default appMenu.reducer;