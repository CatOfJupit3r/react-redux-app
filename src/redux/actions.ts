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

export const setOnlyFavorite = () => {
    return {
        type: actionTypes.ONLY_FAVORITE,
    }
}

export const clearBooks = () => {
    return {
        type: actionTypes.CLEAR_BOOKS
    }
}

export const setAuthorFilter = (author: string) => {
    return {
        type: actionTypes.SET_AUTHOR_FILTER,
        payload: author
    }
}

export const setTitleFilter = (title: string) => {
    return {
        type: actionTypes.SET_TITLE_FILTER,
        payload: title
    }
}
