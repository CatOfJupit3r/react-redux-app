import React from 'react';

import { Book } from "../types/book"
import store from "../redux/store";
import {favoriteBook, removeBook} from "../redux/actions";
import styles from "../styles/BookComponent.module.css";

function BookComponent(props: {
    book: Book,
    index: number
}) {
    const { book, index} = props;

    const bookText = (book: Book, index: number) => {
        return `${index.toString()}. ${book.title} by ${book.author} (${book.addedType})`
    }

    const handleFavorite = () => {
        store.dispatch(favoriteBook(book.id))
    }

    const handleRemove = () => {
        store.dispatch(removeBook(book.id))
    }

    return (
        <div className={styles.Book}>
            <p>
                {bookText(book, index)}
            </p>
            <div>
                <button onClick={handleFavorite}>
                    {book.favorite ? "Remove from favorites" : "Add to favorites"}
                </button>
                <button onClick={handleRemove}>
                    Remove
                </button>
            </div>
        </div>
    );
}

export default BookComponent;
