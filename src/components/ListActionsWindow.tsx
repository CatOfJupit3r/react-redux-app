import React, {useState} from 'react';

import {
    toggleOnlyFavorite,
    setAuthorFilter as setAuthorFilterStore,
    setTitleFilter as setTitleFilterStore} from "../redux/slices/filterSlice";

import styles from "../styles/common.module.css";
import {useDispatch, useSelector} from "react-redux";
import {clearBooks} from "../redux/books/actions";
import {StoreState} from "../types/states";

const ListActionsWindow = () => {

    const dispatch = useDispatch()
    const selector = useSelector((state: StoreState) => state.filter.onlyFavorite)

    const [titleFilter, setTitleFilter] = useState("")
    const [authorFilter, setAuthorFilter] = useState("")


    const handleFavoriteSwitch = () => {
        dispatch(toggleOnlyFavorite())
    }

    const handleTitleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitleFilter(event.target.value)
        dispatch(setTitleFilterStore(event.target.value))
    }

    const handleAuthorFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuthorFilter(event.target.value)
        dispatch(setAuthorFilterStore(event.target.value))
    }

    const handleClearFilters = () => {
        setTitleFilter("")
        setAuthorFilter("")
        dispatch(setTitleFilterStore(""))
        dispatch(setAuthorFilterStore(""))
        if (selector) {
            dispatch(toggleOnlyFavorite())
        }
    }

    const handleClearAllBooks = () => {
        dispatch(clearBooks())
    }

    return (
        <div className={styles.commonWindow}>
             <h1>Filter List</h1>
            <input
                value={titleFilter}
                placeholder={"Filter by title..."}
                onChange={handleTitleFilter}
                className={`${styles.commonInput} notSelectable`}/>
            <br/>
            <input
                value={authorFilter}
                placeholder={"Filter by author..."}
                onChange={handleAuthorFilter}
                className={`${styles.commonInput} notSelectable`}
            />
            <br/>
            <label>
                <input
                    type="checkbox"
                    onChange={handleFavoriteSwitch}
                    checked={selector}
                />
                Only show favorites
            </label>
            <br/>
            <button
                onClick={handleClearFilters}
                className={styles.commonButton}
            > Clear filters
            </button>
            <button
                onClick={handleClearAllBooks}
                className={styles.commonButton}
            >
                Clear all books
            </button>
         </div>
     );
};

export default ListActionsWindow;