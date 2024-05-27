import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// part that makes the API call to the dog API
const URL_SERV = 'https://dog.ceo/api'

// sort of like a template for the other API calls
const getBreedsList = {
    method: 'GET',
    url: URL_SERV + '/breeds/list/all'
}

// gets the list of breeds supplied by the API
export const fetchBreedsList = createAsyncThunk(
    'breeds/fetchBreedsList',
    async() => {
        try {
            const response = await axios.request(getBreedsList)
            return response.data
        } catch (error) {
        console.error(error)
    }
})

// gets the desired dog breed that is updated from the dogForm component. Then it uses it to make the API call to get the dog picture
export const fetchDogPics = createAsyncThunk(
    'breeds/fetchDogPics',
    async (formParams) => {
        try {
            if (formParams.breed === ''){
                return
            }
            console.log('Form data from thunk: ', formParams);

            let dogPicsRequest = {
                method: 'GET',
                url: URL_SERV + '/breed'
            };

            if (formParams.dogNumber === '1') {
                dogPicsRequest.url += `/${encodeURIComponent(formParams.breed)}/images/random`  
            }
            console.log("dogPicsRequest: ", dogPicsRequest.url)
            const response = await axios.request(dogPicsRequest)
            return response.data;
        } catch (error) {
            console.error(error)
        }
    }
);
