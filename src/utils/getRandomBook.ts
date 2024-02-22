import {Book} from "../types/book";
import data from "../data/books.json";

export const getRandomBook = () : Book => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const {title, author} = data[randomIndex];
    return {
        title,
        author,
        id: crypto.randomUUID(),
        addedType: "random",
        favorite: false
    }
}