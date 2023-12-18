import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        selectedCategory: {},
        query: "",
    },
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        clearSelectedCategory: () => {
            return {};
        },
    },
});

export const { setQuery, setSelectedCategory, clearSelectedCategory } = productsSlice.actions;

export default productsSlice.reducer;