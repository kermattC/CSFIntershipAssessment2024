import { createSlice } from '@reduxjs/toolkit';
import { fetchBreedsList } from '../utils/thunk';

export const breedsSlice = createSlice({
    name: 'breeds',
    initialState: {
        breedsList: []
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchBreedsList.pending, (state) => {
            console.log("fetchBreedsList pending")
        })
        .addCase(fetchBreedsList.fulfilled, (state, action) => {
            state.breedsList = action.payload
            console.log("fetchBreedsList fulfilled")
        })
        .addCase(fetchBreedsList.rejected, (state) => {
            console.log("fetchBreedsList rejected")
        })
    }
})

export default breedsSlice.reducer;