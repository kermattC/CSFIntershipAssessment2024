import { configureStore } from '@reduxjs/toolkit'
import breedsSlice from './reducers/breeds'

export const store = configureStore({
    reducer: {
        breeds: breedsSlice
    }
})
