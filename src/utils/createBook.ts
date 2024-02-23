import {Book} from "../types/book";


const createBook = (
    title: string,
    author: string,
    addedType: string = "manual"
): Book => {
    return {
        title: title,
        author: author,
        favorite: false,
        addedType: addedType,
        id: crypto.randomUUID(),
    }
}

export default createBook