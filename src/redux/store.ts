import { configureStore } from '@reduxjs/toolkit'
import bookSlice from "./slices/booksSlice";
import filterReducer from "./slices/filterSlice";

export default configureStore({
    reducer: {
        books: bookSlice,
        filter: filterReducer,
    }
})
