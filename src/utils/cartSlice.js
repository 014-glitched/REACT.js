import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            //mutating the state here or directly modifying the state here
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

export const{addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;

//Now my cartslice is a function and this function takes a configuartion to form a slice
//Corresponding to each action we will write reducer function
//Action are kind of small APIs to connect our application to out redux store
//Reducers are basically an object
//Reducer function will basically modify the slice of our store
//Here addItem is the action and the function we are going to wrote inside it is the reducer function
//Reducer function get two parameters (state, action) the state here is the initialState as defined in the code, we will modify the state based on the action
//as the items defined above is an array so we will be using push method
//We will get the payload when we will call the addItem
//createSlice function will return an object in the cartSlice