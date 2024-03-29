import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/AxiosInstance";

export const FetchHomeData = createAsyncThunk('fetchhome', async (data) => {
    try {
        const res = await axiosInstance.get(`getbanner`, data);
        return res?.data;
    } catch (error) {
        console.log(error);
    }
});

const initialState = {
    home_data: [],
    status: "success",
};

export const HomeSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },

    extraReducers: {
        [FetchHomeData.pending.type]: (state) => {
            state.status = "loading...";
            state.home_data = null;
        },
        [FetchHomeData.fulfilled.type]: (state, { payload }) => {
            state.status = 'success';
            state.home_data = payload;
        },
        [FetchHomeData.rejected.type]: (state) => {
            state.status = 'try again';
        },
    }
});