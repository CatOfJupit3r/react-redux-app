import React from 'react';

import { Book } from "../types/book"
import store from "../redux/store";
import {favoriteBook, removeBook} from "../redux/actions";
import styles from "../styles/BookComponent.module.css";
import {FaRegBookmark, FaRegTrashAlt} from "react-icons/fa";
import Highlighter from "react-highlight-words";


function BookComponent(props: {
    book: Book,
    index: number
}) {
    const { book, index} = props;

    const bookText = (book: Book, index: number) => {

        return <p>
            {index.toString()}.{` `}
            <Highlighter
                highlightClassName={styles.highlight}
                searchWords={[store.getState().titleFilter]}
                autoEscape={true}
                textToHighlight={book.title}
            /> by <b><Highlighter
                highlightClassName={styles.highlight}
                searchWords={[store.getState().authorFilter]}
                autoEscape={true}
                textToHighlight={book.author}
            /></b> ({book.addedType})
        </p>
    }

    const handleFavorite = () => {
        store.dispatch(favoriteBook(book.id))
    }

    const handleRemove = () => {
        store.dispatch(removeBook(book.id))
    }

    return (
        <div className={styles.Book}>
            {bookText(book, index)}
            <div>
                <FaRegBookmark
                    onClick={handleFavorite}
                    className={`${book.favorite ? styles.golden : styles.lessGolden} ${styles.icon} notSelectable`}
                />
                <FaRegTrashAlt
                    onClick={handleRemove}
                    className={`${styles.red} ${styles.icon} notSelectable`}
                />
            </div>
        </div>
    );
}

export default BookComponent;
