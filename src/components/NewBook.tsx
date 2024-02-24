import React, {useState} from 'react';
import {addBook as addBookPayload, fetchBook} from "../redux/slices/booksSlice";
import {getRandomBook} from "../utils/getRandomBook";
import styles from "../styles/common.module.css";
import {useDispatch} from "react-redux";
import createBook from "../utils/createBook";
import {UnknownAction} from "@reduxjs/toolkit";
import {toast} from "react-toastify";
import {setError} from "../redux/slices/errorSlice";


const NewBook = () => {
    const [bookTitle, setBookTitle] = useState("")
    const [bookAuthor, setBookAuthor] = useState("")

    const dispatch = useDispatch()

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBookTitle(e.target.value)
    }

    const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBookAuthor(e.target.value)
    }

    const addBook = () => {
        if (bookTitle === "" || bookAuthor === "") {
            dispatch(setError("Please fill in all fields!"))
            return
        }
        setBookTitle("")
        setBookAuthor("")
        dispatch(
            addBookPayload(
                createBook(bookTitle, bookAuthor, "manual")
            )
        )
    }

    const addRandomBook = () => {
        dispatch(addBookPayload(getRandomBook()))
    }


    const addRandomBookAPI = () => {
        dispatch(fetchBook("http://localhost:4000/random-book") as unknown as UnknownAction) // DAMN???
    }

    return (
        <div className={styles.commonWindow}>
            <h1>New Book</h1>
            <h2>Title: </h2>
            <input
                value={bookTitle}
                type="text"
                onChange={handleTitleChange}
                className={styles.commonInput}
                placeholder={"Enter title of book"}
            />
            <h2>Author: </h2>
            <input
                value={bookAuthor}
                type="text"
                onChange={handleAuthorChange}
                placeholder={"Enter name of author"}
                className={styles.commonInput}
            />
            <br/>
            <button
                onClick={addBook}
                className={styles.commonButton}
            >Add Book
            </button>
            <button
                onClick={addRandomBook}
                className={styles.commonButton}
            >Add Random Book</button>
            <button
                onClick={addRandomBookAPI}
                className={styles.commonButton}
            >Add Random Book via API</button>
        </div>
    );
};

export default NewBook;