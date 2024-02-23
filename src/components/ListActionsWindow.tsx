import React, {useEffect, useState} from 'react';

import {
    toggleOnlyFavorite,
    setAuthorFilter as setAuthorFilterStore,
    setTitleFilter as setTitleFilterStore} from "../redux/slices/filterSlice";

import styles from "../styles/common.module.css";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {clearBooks} from "../redux/books/actions";
import {StoreState} from "../types/states";

const ListActionsWindow = () => {

    const dispatch = useDispatch()
    const {
        onlyFavorite,
        titleFilterStore,
        authorFilterStore
    } = useSelector((state: StoreState) => {
        return {
            onlyFavorite: state.filter.onlyFavorite,
            titleFilterStore: state.filter.title,
            authorFilterStore: state.filter.author
        }
    }, shallowEqual)

    const [titleFilter, setTitleFilter] = useState(titleFilterStore)
    const [authorFilter, setAuthorFilter] = useState(authorFilterStore)


    const handleFavoriteSwitch = () => {
        dispatch(toggleOnlyFavorite())
    }

    const handleTitleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setTitleFilterStore(event.target.value))
    }

    const handleAuthorFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setAuthorFilterStore(event.target.value))
    }

    useEffect(() => {
        setTitleFilter(titleFilterStore)
    }, [titleFilterStore]);

    useEffect(() => {
        setAuthorFilter(authorFilterStore)
    }, [authorFilterStore]);

    const handleClearFilters = () => {
        setTitleFilter("")
        setAuthorFilter("")
        dispatch(setTitleFilterStore(""))
        dispatch(setAuthorFilterStore(""))
        if (onlyFavorite) {
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
                    checked={onlyFavorite}
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