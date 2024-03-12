import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/AxiosInstance";

export const AddBlogDetailsData = createAsyncThunk('addblogdetails', async (_id) => {
    try {
        const res = await axiosInstance.get(`getblogdetails/${_id}`)
        return res;
    } catch (error) {
        console.log(error);
    }
});

const initialState = {
    blogdetails_data: {},
    status: "success",
};

export const BlogDetailsSlice = createSlice({
    name: "blogdetails",
    initialState,
    reducers: {
    },
    
    extraReducers: {
        [AddBlogDetailsData.pending.type]: (state) => {
            state.status = "loading...";
            state.blogdetails_data = null;
        },
        [AddBlogDetailsData.fulfilled.type]: (state, { payload }) => {
            state.status = 'success';
            state.blogdetails_data = payload;
        },
        [AddBlogDetailsData.rejected.type]: (state) => {
            state.status = 'try again';
        },
    }
});