import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/AxiosInstance";

export const AddServiceDetailsData = createAsyncThunk("addservicedetailsdata", async (_id) => {
    try {
        const response = await axiosInstance.get(`getservicedetails/${_id}`)
        return response;
    } catch (error) {
        console.log(error);
    }
});

const initialState = {
    servicedetails_data: {},
    status: "success",
}

export const ServiceDetailsSlice = createSlice({
    name: "service",
    initialState,
    reducers: {
    },

    extraReducers: {
        [AddServiceDetailsData.pending.type]: (state) => {
            state.status = "loading...";
            state.servicedetails_data = null;
        },
        [AddServiceDetailsData.fulfilled.type]: (state, { payload }) => {
            state.status = 'success';
            state.servicedetails_data = payload;
        },
        [AddServiceDetailsData.rejected.type]: (state) => {
            state.status = 'try again';
        },
    }
});