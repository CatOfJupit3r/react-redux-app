import {Book} from "../types/book";
import data from "../data/books.json";
import createBook from "./createBook";

export const getRandomBook = () : Book => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const {title, author} = data[randomIndex];
    return createBook(
        title, author, "random"
    )
}