import * as actionTypes from './actionTypes'
import {Book} from "../../types/book";


const initialState: Book[] = []

export default function booksReducer(state = initialState, action: any): Book[] {
    switch (action.type){
        case actionTypes.ADD_BOOK:
            return state.concat(action.payload)
        case actionTypes.REMOVE_BOOK:
            return state.filter((book: Book) => book.id !== action.payload)
        case actionTypes.FAVORITE_BOOK:
            return [...state.map((book: Book) => {
                    if (book.id === action.payload){
                        return {
                            ...book,
                            favorite: !(book.favorite)
                        }
                    }
                    return book
                })]
        case actionTypes.CLEAR_BOOKS:
            return []
        default:
            return state
    }
}
