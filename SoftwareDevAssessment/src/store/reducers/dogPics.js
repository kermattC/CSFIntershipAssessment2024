import { createSlice } from '@reduxjs/toolkit';
import { fetchDogPics } from '../utils/thunk';

export const dogPicsSlice = createSlice({
    name: 'dogPics',
    initialState: {
        dogPics: []
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDogPics.pending, (state) => {
            console.log("fetchBreedsList pending")
        })
        .addCase(fetchDogPics.fulfilled, (state, action) => {
            state.dogPics = action.payload
            console.log("fetchDogPics fulfilled")
        })
        .addCase(fetchDogPics.rejected, (state) => {
            console.log("fetchDogPics rejected")
        })
    }
})

export default dogPicsSlice.reducer;