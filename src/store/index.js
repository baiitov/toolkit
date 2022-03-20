import { configureStore } from "@reduxjs/toolkit";
import trelloSlise from "./authBase";
import toggleSlice from "./toggle";

const store =configureStore({
    reducer: {
        base: trelloSlise.reducer, 
        toggle:toggleSlice.reducer }
})

export default store