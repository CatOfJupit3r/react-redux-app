import React, {useEffect, useState} from 'react';
import {Book} from "../types/book";
import BookComponent from "./BookComponent";
import {shallowEqual, useSelector} from "react-redux";
import {StoreState} from "../types/states";

const BooksList = () => {

    const {
        booksSelector,
        filterSelector
    } = useSelector((state: StoreState) => {
        return {
            booksSelector: state.books,
            filterSelector: state.filter
        }
    }, shallowEqual);

    const [displayedBooks, setDisplayedBooks] = useState(booksSelector);

    useEffect(() => {
        const updateList = () => {
            const favoriteFilter = filterSelector.onlyFavorite;
            const authorFilter = filterSelector.author;
            const titleFilter = filterSelector.title;

            const booksToDisplay = booksSelector.filter((book: Book) => {
                const authorMatch = (book.author.toLowerCase().includes(authorFilter.toLowerCase()) || authorFilter === "");
                const titleMatch = (book.title.toLowerCase().includes(titleFilter.toLowerCase()) || titleFilter === "");

                if (favoriteFilter) {
                    return book.favorite && authorMatch && titleMatch;
                } else {
                    return authorMatch && titleMatch;
                }
            });

            setDisplayedBooks(booksToDisplay);
        };

        updateList();
    }, [booksSelector, filterSelector]);

    return (
        <div>
            <h1>Books List</h1>
            {
                displayedBooks.length > 0 ?
                    displayedBooks.map((book, index) => (
                        <BookComponent book={book} index={index+1} key={index}/>
                    ))
                    :
                    <h2>Empty...</h2>
            }
        </div>
    );
};

export default BooksList;