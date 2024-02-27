import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import cacheSlice from "./cacheSlice";
import chatSlice from "./chatSlice";


const store = configureStore({
    reducer: {
      toggle : appSlice,
      suggestionCache: cacheSlice,
      LiveChatSlice : chatSlice,
    } 
})

export default store;
