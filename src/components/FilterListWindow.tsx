import React from 'react';
import store from "../redux/store";
import {changeSort} from "../redux/actions";

const FilterListWindow = () => {
    // const sortBy = (key: "default" | "favorites" | "author" | "title") => {
    //     store.dispatch(changeSort(key))
    // }
    //
    // return (
    //     <div>
    //         <h2>Filter List</h2>
    //         <div>
    //             {
    //                 ["default", "favorites", "author", "title"].map((key: string, index) => (
    //                     <button
    //                         key={index}
    //                         onClick={() => sortBy(key as "default" | "favorites" | "author" | "title")}
    //                     >
    //                         {key[0].toUpperCase() + key.slice(1, key.length).toLowerCase()}
    //                     </button>
    //                 ))
    //             }
    //         </div>
    //     </div>
    // );
};

export default FilterListWindow;