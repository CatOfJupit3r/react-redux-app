import {Book} from "../types/book";
import * as actionTypes from './actionTypes'

export const addBook = (payload: Book) => {
    return {
        type: actionTypes.ADD_BOOK,
        payload: payload
    }
}

export const removeBook = (id: string) => {
    return {
        type: actionTypes.REMOVE_BOOK,
        payload: id
    }
}

export const favoriteBook = (id: string) => {
    return {
        type: actionTypes.FAVORITE_BOOK,
        payload: id
    }
}

export const changeSort = (sort: "default" | "favorites" | "author" | "title") => {
    return {
        type: actionTypes.CHANGE_SORT,
        payload: sort
    }
}

export const clearBooks = () => {
    return {
        type: actionTypes.CLEAR_BOOKS
    }
}
