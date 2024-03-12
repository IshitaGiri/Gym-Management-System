import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const FetchContactData = createAsyncThunk('fetchcontact', async (data) => {
    try {
        const res = await axios.post(`https://restapinodejs.onrender.com/api/contact/create`, data);
        return res?.data;
    } catch (error) {
        console.log(error);
    }
});

const initialState = {
    contact_data: [],
    status: "success",
};

export const ContactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
    },

    extraReducers: {
        [FetchContactData.pending.type]: (state) => {
            state.status = "loading...";
            // state.contact_data = null;
        },
        [FetchContactData.fulfilled.type]: (state, { payload }) => {
            state.status = 'success';
            toast.success("Message Sent Successfully");
            // state.contact_data = payload;
        },
        [FetchContactData.rejected.type]: (state) => {
            state.status = 'try again';
        },
    }
});