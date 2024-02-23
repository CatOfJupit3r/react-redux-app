import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FilterState} from "../../types/states";


const initialState: FilterState = {
  title: '',
  author: '',
  onlyFavorite: false
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter(state, action: PayloadAction<string>) {
      return {
        ...state,
        title: action.payload,
      }
    },
    setAuthorFilter(state, action: PayloadAction<string>) {
        return {
          ...state,
          author: action.payload,
        }
    },
    toggleOnlyFavorite(state) {
        return {
            ...state,
            onlyFavorite: !state.onlyFavorite,
        }
    }
  },
});


export default filterSlice.reducer;
export const {
  setTitleFilter,
  setAuthorFilter,
  toggleOnlyFavorite } = filterSlice.actions;