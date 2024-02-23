import React from 'react';

import { Book } from "../types/book"
import {favoriteBook, removeBook} from "../redux/books/actions";
import styles from "../styles/BookComponent.module.css";
import {FaRegBookmark, FaRegTrashAlt} from "react-icons/fa";
import Highlighter from "react-highlight-words";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {StoreState} from "../types/states";


function BookComponent(props: {
    book: Book,
    index: number
}) {
    const { book, index} = props;

    const dispatch = useDispatch()

    const {
        titleFilter,
        authorFilter
    } = useSelector((state: StoreState) => {
        return {
            titleFilter: state.filter.title,
            authorFilter: state.filter.author
        }
    }, shallowEqual)

    const bookText = (book: Book, index: number) => {

        return <p>
            {index.toString()}.{` `}
            <Highlighter
                highlightClassName={styles.highlight}
                searchWords={[titleFilter]}
                autoEscape={true}
                textToHighlight={book.title}
            /> by <b><Highlighter
                highlightClassName={styles.highlight}
                searchWords={[authorFilter]}
                autoEscape={true}
                textToHighlight={book.author}
            /></b> ({book.addedType})
        </p>
    }

    const handleFavorite = () => {
        dispatch(favoriteBook(book.id))
    }

    const handleRemove = () => {
        dispatch(removeBook(book.id))
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
