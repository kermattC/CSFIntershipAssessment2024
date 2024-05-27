import { createSlice } from '@reduxjs/toolkit';

// slice that contains the state of the form data
export const formSlice = createSlice({
    name: 'formDetails',
    initialState: {
        name: '',
        breed: '',
        dogNumber: '',
        email: '',
        submitted: false
    },
    reducers: {
        updateFormData: (state, action) => {
            const { name, breed, dogNumber, email } = action.payload;
            state.name = name;
            state.breed = breed;
            state.dogNumber = dogNumber;
            state.email = email
        },
        updateFormSubmitted: (state) => {
            state.submitted = true
        }
    }
})

export const { updateFormData, updateFormSubmitted } = formSlice.actions;
export default formSlice.reducer;