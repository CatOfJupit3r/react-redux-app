import React, {useState} from 'react';
import store from "../redux/store";
import {Book} from "../types/book";
import BookComponent from "./BookComponent";

const BooksList = () => {
    const [displayedBooks, setDisplayedBooks] = useState(store.getState().books);

    const updateList = () => {
        const favoriteFilter = store.getState().onlyFavorite;
        const authorFilter = store.getState().authorFilter;
        const titleFilter = store.getState().titleFilter;

        const booksToDisplay = store.getState().books.filter((book: Book) => {
            let authorMatch = (book.author.toLowerCase().includes(authorFilter.toLowerCase()) || authorFilter === "");
            let titleMatch = (book.title.toLowerCase().includes(titleFilter.toLowerCase()) || titleFilter === "");

            if (favoriteFilter){
                return book.favorite && authorMatch && titleMatch;
            }  else {
                return authorMatch && titleMatch;
            }
        })

        setDisplayedBooks(booksToDisplay);
    }

    store.subscribe(() => {
        updateList();
    })

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