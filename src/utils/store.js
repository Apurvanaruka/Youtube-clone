import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import cacheSlice from "./cacheSlice";
import chatSlice from "./chatSlice";
import tokenSlice from "./tokenSlice";

const store = configureStore({
    reducer: {
      toggle : appSlice,
      suggestionCache: cacheSlice,
      LiveChatSlice : chatSlice,
	TokenSlice : tokenSlice,
    } 
})

export default store;
