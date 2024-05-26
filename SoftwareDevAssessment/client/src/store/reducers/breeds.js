import { createSlice } from '@reduxjs/toolkit';
import { fetchBreedsList } from '../utils/thunk';

// slice for the breeds list. Deals with an API so I need the extraReducers
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