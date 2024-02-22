import React, {useState} from 'react';
import store from "../redux/store";
import {addBook as addBookPayload} from "../redux/actions";
import {getRandomBook} from "../utils/getRandomBook";
import styles from "../styles/NewBook.module.css";


const NewBook = () => {
    const [bookTitle, setBookTitle] = useState("")
    const [bookAuthor, setBookAuthor] = useState("")

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBookTitle(e.target.value)
    }

    const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBookAuthor(e.target.value)
    }

    const addBook = () => {
        if (bookTitle === "" || bookAuthor === "") {
            alert("Please fill in all fields")
            return
        }
        setBookTitle("")
        setBookAuthor("")
        store.dispatch(
            addBookPayload({
                title: bookTitle,
                author: bookAuthor,
                id: crypto.randomUUID(),
                addedType: "manual",
                favorite: false
            })
        )
    }

    const addRandomBook = () => {
        store.dispatch(addBookPayload(getRandomBook()))
    }

    return (
        <div className={styles.newBookWindow}>
            <h1>New Book</h1>
            <h2>Title: </h2>
            <input value={bookTitle} type="text" onChange={handleTitleChange} placeholder={"Enter title of book"}/>
            <h2>Author: </h2>
            <input value={bookAuthor} type="text" onChange={handleAuthorChange} placeholder={"Enter name of author"} />
            <br/>
            <button onClick={addBook}>Add Book</button>
            <br/>
            <button onClick={addRandomBook}>Add Random Book</button>
        </div>
    );
};

export default NewBook;