import { createAsyncThunk } from '@reduxjs/toolkit'
import { ISneakers } from '../../models/models'
import axios from 'axios'

export interface ParamsSnk {
    currentPage: number,
    sort: string,
    order: string
}

export const fetchSneakers = createAsyncThunk<ISneakers[], ParamsSnk>(
    'sneakers/fetchSneakersStatus',
    async (params) => {
        const { currentPage, sort, order } = params
        const { data } = await axios.get<ISneakers[]>(`https://653c2e20d5d6790f5ec7dea2.mockapi.io/v2/items?page=${currentPage}&sortBy=${sort}&order=${order}`);
        return data as ISneakers[]
    }
)

interface ParamsFull {
    id: string | undefined,
}

export const fetchFullSnk = createAsyncThunk<ISneakers, ParamsFull>(
    'full/fetchFullStatus',
    async (params) => {
        const { id } = params
        const { data } = await axios.get<ISneakers>(`https://653c2e20d5d6790f5ec7dea2.mockapi.io/v2/items/${id}`);
        return data as ISneakers
    }
)