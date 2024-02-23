import {Book} from "./book";

export interface FilterState {
    title: string;
    author: string;
    onlyFavorite: boolean;
}

export interface StoreState {
    books: Book[];
    filter: FilterState;
}