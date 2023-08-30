import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        allUsers: [],
        favorites: []
    },
    reducers: {
        setAllUsers: (state, action) => {
            state.allUsers = action.payload
        },
        addFavorite: (state, action) => {
            state.favorites.push(action.payload)
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(x => x.id !== action.payload)
        },
    }
})

export const {setAllUsers, addFavorite, removeFavorite} = userSlice.actions

export default userSlice.reducer;