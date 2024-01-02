import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import cacheSlice from "./cacheSlice";

const store = configureStore({
    reducer: {
      toggle : appSlice,
      suggestionCache: cacheSlice
    } 
})

export default store;