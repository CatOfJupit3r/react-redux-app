import React, {useState} from 'react';
import store from "../redux/store";

import {
    setOnlyFavorite,
    setTitleFilter as setTitleFilterAction,
    setAuthorFilter as setAuthorFilterAction, clearBooks
} from "../redux/actions";

import styles from "../styles/ListActionsWindow.module.css";

const ListActionsWindow = () => {

    const [titleFilter, setTitleFilter] = useState("")
    const [authorFilter, setAuthorFilter] = useState("")
    const [boxChecked, setBoxChecked] = useState(store.getState().onlyFavorite)

    const handleFavoriteSwitch = () => {
        store.dispatch(setOnlyFavorite())
    }

    const handleTitleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitleFilter(event.target.value)
        store.dispatch(setTitleFilterAction(event.target.value))
    }

    const handleAuthorFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuthorFilter(event.target.value)
        store.dispatch(setAuthorFilterAction(event.target.value))
    }

    const handleClearFilters = () => {
        setTitleFilter("")
        setAuthorFilter("")
        store.dispatch(setTitleFilterAction(""))
        store.dispatch(setAuthorFilterAction(""))
        if (store.getState().onlyFavorite) {
            store.dispatch(setOnlyFavorite())
        }
    }

    const handleClearAllBooks = () => {
        store.dispatch(clearBooks())
    }

    store.subscribe(() => {
        setBoxChecked(store.getState().onlyFavorite)
    })

    return (
        <div className={styles.actionWindow}>
             <h1>Filter List</h1>
            <input value={titleFilter} placeholder={"Filter by title..."} onChange={handleTitleFilter}/>
            <br/>
            <input value={authorFilter} placeholder={"Filter by author..."} onChange={handleAuthorFilter}/>
            <br/>
            <label>
                <input type="checkbox" onChange={handleFavoriteSwitch} checked={boxChecked}/>
                Only show favorites
            </label>
            <br/>
            <button onClick={handleClearFilters}>
                Clear filters
            </button>
            <br/>
            <button onClick={handleClearAllBooks}>
                Clear all books
            </button>
         </div>
     );
};

export default ListActionsWindow;