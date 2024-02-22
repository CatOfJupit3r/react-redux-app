import React, {useState} from 'react';
import store from "../redux/store";
import {setOnlyFavorite,
    setTitleFilter as setTitleFilterAction,
    setAuthorFilter as setAuthorFilterAction} from "../redux/actions";

const FilterListWindow = () => {

    const [titleFilter, setTitleFilter] = useState("")
    const [authorFilter, setAuthorFilter] = useState("")

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

    return (
        <div>
             <h2>Filter List</h2>
            <input value={titleFilter} placeholder={"Filter by title..."} onChange={handleTitleFilter}/>
            <br/>
            <input value={authorFilter} placeholder={"Filter by author..."} onChange={handleAuthorFilter}/>
            <br/>
            <button onClick={handleFavoriteSwitch}>Only Favorites</button>
         </div>
     );
};

export default FilterListWindow;