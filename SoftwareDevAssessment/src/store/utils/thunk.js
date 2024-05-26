import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_SERV = 'https://dog.ceo/api'

const getBreedsList = {
    method: 'GET',
    url: URL_SERV + '/breeds/list/all'
}

const getDogPics = {
    method: 'GET',
    url: URL_SERV + '/'
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