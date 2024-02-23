import {Book} from "../../types/book";
import {createSlice} from "@reduxjs/toolkit";


const initialState: Book[] = []

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            return state.concat(action.payload)
        },
        removeBook: (state, action) => {
            return state.filter((book: Book) => book.id !== action.payload)
        },
        favoriteBook: (state, action) => {
            return [...state.map((book: Book) => {
                if (book.id === action.payload){
                    return {
                        ...book,
                        favorite: !(book.favorite)
                    }
                }
                return book
            })]
        },
        clearBooks: () => {
            return []
        }
    }
})

export default bookSlice.reducer;
export const {
    addBook,
    removeBook,
    favoriteBook,
    clearBooks
} = bookSlice.actions
