import {Book} from "./book";

export interface FilterState {
    title: string;
    author: string;
    onlyFavorite: boolean;
}

export interface BooksState {
    books: Book[],
    isLoadingViaAPI: boolean
}

export interface StoreState {
    books: BooksState;
    filter: FilterState;
    error: string
}