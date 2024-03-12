import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/AxiosInstance";

export const FetchServiceData = createAsyncThunk('fetchservice', async (data) => {
    try {
        const res = await axiosInstance.get(`getservice`, data);
        return res?.data;
    } catch (error) {
        console.log(error);
    }
});

const initialState = {
    service_data: [],
    status: "success",
};

export const ServiceSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },

    extraReducers: {
        [FetchServiceData.pending.type]: (state) => {
            state.status = "loading...";
            state.service_data = null;
        },
        [FetchServiceData.fulfilled.type]: (state, { payload }) => {
            state.status = 'success';
            state.service_data = payload;
        },
        [FetchServiceData.rejected.type]: (state) => {
            state.status = 'try again';
        },
    }
});