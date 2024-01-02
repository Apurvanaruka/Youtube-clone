import { combineSlices, createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
    name:"cache",
    initialState: {
        suggestions : {
       
        }
    },
    reducers: {
        addCache : (state, action)=>{
            state.suggestions[Object.keys(action.payload)[0]] = Object.values(action.payload)[0]          
        }
    }           
})

export const {addCache} = cacheSlice.actions;

export default cacheSlice.reducer;