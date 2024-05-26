import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_SERV = 'https://dog.ceo/api'

const getBreedsList = {
    method: 'GET',
    url: URL_SERV + '/breeds/list/all'
}


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
