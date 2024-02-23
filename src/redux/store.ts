import { configureStore } from '@reduxjs/toolkit'
import booksReducer from "./books/booksReducer";
import filterReducer from "./slices/filterSlice";

export default configureStore({
    reducer: {
        books: booksReducer,
        filter: filterReducer,
    }
})
