import * as actionTypes from './actionTypes'
import {Book} from "../types/book";


const initialState : {
    sort: "default" | "title" | "author" | "favorites",
    books: Book[]
} = {
    books: [],
    sort: "default", // default | name | author | favorites
}


const reducer = (state: {
    sort: string,
    books: Book[]
} = initialState, action: {
    type: string
    payload: any
}) => {
    switch (action.type){
        case actionTypes.ADD_BOOK:
            return {
                ...state,
                books: state.books.concat(action.payload)
            }
        case actionTypes.REMOVE_BOOK:
            return {
                ...state,
                books: state.books.filter((book: Book) => book.id !== action.payload)
            }
        case actionTypes.FAVORITE_BOOK:
            return {
                ...state,
                books: state.books.map((book: Book) => {
                    if (book.id === action.payload){
                        return {
                            ...book,
                            favorite: !(book.favorite)
                        }
                    }
                    return book
                })
            }
        case actionTypes.CHANGE_SORT:
            if (state.sort === action.payload){
                return {
                    ...state,
                    sort: "default"
                }
            }
            return {
                ...state,
                sort: action.payload
            }
        default:
            return state
    }
}

export default reducer