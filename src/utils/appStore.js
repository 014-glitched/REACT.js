import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default appStore;

//here the reducer is responsible for modifying the appStore and the reducer is basically the combination of different small stores
//For each slice we will have a different reducer 