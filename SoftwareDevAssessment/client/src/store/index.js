import { configureStore } from '@reduxjs/toolkit'
import breedsReducer from './reducers/breeds'
import formReducer from './reducers/formDetails'
import dogPicsReducer from './reducers/dogPics'

// just the store to contain all the reducers necessary
export const store = configureStore({
    reducer: {
        breeds: breedsReducer,
        formDetails: formReducer,
        dogPics: dogPicsReducer
    }
})

