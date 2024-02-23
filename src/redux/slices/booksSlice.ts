import {Book} from "../../types/book";
import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import createBook from "../../utils/createBook";


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
    clearBooks,
} = bookSlice.actions


export const thunkFunction = async (dispatch: Function, _: any) => {
    try {
        const res = await axios.get("http://localhost:4000/random-book")
        if (res?.data?.title && res?.data?.author) {
            const {title, author} = res.data
            dispatch(
                addBook(
                    createBook(title, author, "API")
                )
            )
        }
    } catch (error: any) {
        console.log("Error fetching random book ", error)
    }
}
