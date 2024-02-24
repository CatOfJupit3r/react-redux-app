import { configureStore } from '@reduxjs/toolkit'
import bookSlice from "./slices/booksSlice";
import filterReducer from "./slices/filterSlice";
import errorReducer from "./slices/errorSlice";

export default configureStore({
    reducer: {
        books: bookSlice,
        filter: filterReducer,
        error: errorReducer
    }
})
