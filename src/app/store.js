import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import authSlice from "../features/authSlice";

const store= configureStore({
    reducer:{
        counter:counterReducer,
        auth:authSlice,
    }
})

export default store