import React, {useEffect, useState} from 'react';
import store from "../redux/store";
import {Book} from "../types/book";
import BookComponent from "./BookComponent";

const BooksList = () => {
    const [displayedBooks, setDisplayedBooks] = useState(store.getState().books);

    const updateList = () => {
        const books = store.getState().books;
        const filterKey = store.getState().sort;

        switch (filterKey){
            case "favorites":
                setDisplayedBooks(books.filter((book: Book) => book.favorite))
                break;
            case "author":
                setDisplayedBooks([...books].sort((a: Book, b: Book) => a.author.localeCompare(b.author)))
                break;
            case "title":
                setDisplayedBooks([...books].sort((a: Book, b: Book) => a.title.localeCompare(b.title)))
                break;
            default:
                setDisplayedBooks(books)
        }
    }

    store.subscribe(() => {
        updateList();
    })

    return (
        <div>
            <h1>Books List</h1>
            <ul>
                {displayedBooks.map((book, index) => (
                    <BookComponent book={book} index={index+1} key={index}/>
                ))}
            </ul>
        </div>
    );
};

export default BooksList;