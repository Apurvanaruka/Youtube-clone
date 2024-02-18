import { createSlice } from "@reduxjs/toolkit";

const appMenu = createSlice({
    name: 'toggle',
    initialState:
    {
        showMenu: false
    },
    reducers: {
        toggleMenu: (state) => {
            state.showMenu = !state.showMenu
        },
        closeMenu: (state) => {
            state.showMenu = true;
        }
    }
});

export const { toggleMenu, closeMenu } = appMenu.actions;

export default appMenu.reducer;
