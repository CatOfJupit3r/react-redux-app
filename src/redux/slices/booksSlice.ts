import {Book} from "../../types/book";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import createBook from "../../utils/createBook";


const initialState: Book[] = []

export const fetchBook = createAsyncThunk(
    'books/fetchBook',
    async () => {
        const res = await axios.get("http://localhost:5000/random-book")
        console.log(res.data)
        return res.data
    }
)

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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBook.fulfilled, (state: Book[], action) => {
            const {payload} = action
            if (payload?.title && payload?.author) {
                const {title, author} = payload
                return [...state, createBook(title, author, "API")]
            }
        })
    }
})

export default bookSlice.reducer;

export const {
    addBook,
    removeBook,
    favoriteBook,
    clearBooks,
} = bookSlice.actions

