import * as actionTypes from './actionTypes'
import {Book} from "../types/book";


const initialState : {
    books: Book[]
    onlyFavorite: boolean,
    authorFilter: string
    titleFilter: string
} = {
    books: [],
    onlyFavorite: false,
    authorFilter: "",
    titleFilter: ""
}


const reducer = (state: {
    books: Book[]
    onlyFavorite: boolean
    authorFilter: string
    titleFilter: string
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
        case actionTypes.ONLY_FAVORITE:
            return {
                ...state,
                onlyFavorite: !state.onlyFavorite
            }
        case actionTypes.CLEAR_BOOKS:
            return {
                ...state,
                books: []
            }
        case actionTypes.SET_AUTHOR_FILTER:
            return {
                ...state,
                authorFilter: action.payload
            }
        case actionTypes.SET_TITLE_FILTER:
            return {
                ...state,
                titleFilter: action.payload
            }
        default:
            return state
    }
}

export default reducer