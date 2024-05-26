import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_SERV = 'https://dog.ceo/api'

const getBreedsList = {
    method: 'GET',
    url: URL_SERV + '/breeds/list/all'
}

const getDogPics = {
    method: 'GET',
    url: URL_SERV + '/breed'
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
            console.log('Form data from thunk: ', formParams);

            if (formParams.dogNumber === '1') {
                getDogPics.url += `/${formParams.breed}/images/random`  
            }
            console.log("getdogPics: ", getDogPics.url)
            const response = await axios.request(getDogPics)
            return response.data;
        } catch (error) {
            console.error(error)
        }
    }
);