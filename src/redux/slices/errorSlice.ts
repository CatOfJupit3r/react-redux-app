import {createSlice} from "@reduxjs/toolkit";

const initialState: string = ''

const ErrorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (_, action) => {
            return action.payload
        },
        clearError: () => {
            return initialState
        }
    }
})

export default ErrorSlice.reducer;

export const {
    setError,
    clearError
} = ErrorSlice.actions

export const selectErrorMessage = (state: any) => {
    console.log(state)
    return state.error
}