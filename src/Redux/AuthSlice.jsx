import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../Api/AxiosInstance";
import { toast } from "react-toastify";

const initialState = {
    userData: {},
    status: "idle",
    redirectReg: null,
    LogoutToggle: false,
    redrictTo: null,
    redirectToor: null
}

export const register = createAsyncThunk("signup", async (data) => {
    const response = await axiosInstance.post("register", data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    // toast(response?.data?.message);
    localStorage.setItem("name", response?.data?.savedMember?.name);
    return response;
})

export const login = createAsyncThunk("login", async (data) => {
    try {
        const response = await axiosInstance.post("login", data);
        return response;
    } catch (error) {
        toast(error?.response?.data?.message)
        // toast("error")
    }
})

export const AuthSlice = createSlice({
    name: "member",
    initialState,
    reducers: {
        // logout
        logout: (state, { payload }) => {
            localStorage.removeItem("token")
            localStorage.removeItem("name")
            localStorage.removeItem("email")
            localStorage.removeItem("phone")
            localStorage.removeItem("answer")
            localStorage.removeItem("image")
            localStorage.removeItem("_id")
            toast.success("LoggedOut Successfully")
            state.LogoutToggle = false
        },

        //for register page redirect after login logout
        regLogOut: (state, { payload }) => {
            localStorage.removeItem("name")
        },

        //for check token
        check_token: (state, { payload }) => {
            let token = localStorage.getItem("token");
            if (token !== null && token !== undefined) {
                state.LogoutToggle = true;
            }
        },

        //for login redirect condition
        redirectToo: (state, { payload }) => {
            state.redrictTo = payload
        },

        //for dashboard redirect condition
        redirectTooe: (state, { payload }) => {
            state.redirectToor = payload
        },
    },

    extraReducers: {
        [register.pending]: (state) => {
            state.loading = true
        },
        [register.fulfilled]: (state, { payload }) => {
            //console.log('kkkk',payload.data.savedMember.name);
            if (payload?.data?.success === true) {
                localStorage.setItem("name", payload.data.savedMember.name)
                localStorage.setItem("email", payload.data.savedMember.email)
                //console.log('hgjhgjghj',payload?.data.savedMember.name);
                state.redirectTo = "/login"
                toast(payload?.data.message);
            }
        },
        [register.rejected]: (state, action) => {
            state.loading = false
            toast("Email Already Exists!");
        },

        [login.pending]: (state) => {
            state.status = "loading"
        },
        [login.fulfilled]: (state, { payload }) => {
            state.status = "idle"
            if (payload?.status === 200) {
                localStorage.setItem("token", payload?.data?.token)
                localStorage.setItem("_id", payload?.data?.data?._id)
                localStorage.setItem("name", payload?.data.data.name)
                localStorage.setItem("email", payload?.data.data.email)
                localStorage.setItem("phone", payload?.data?.data?.phone)
                localStorage.setItem("answer", payload?.data?.data?.answer)
                localStorage.setItem("image", payload?.data?.data?.image)
                state.redirectToor = "/"
                state.LogoutToggle = true
                toast(payload?.data?.message);
            }
        },
        [login.rejected]: (state, action) => {
            state.status = "idle"
            state.error = action.payload;
            console.error('Login Error:', action.payload); // Log the error to the console
            toast("Wrong Email or Password!");
        }
    }
})

export const { logout, LogoutUser, check_token, redirectToo, redirectTooe, regLogOut } = AuthSlice.actions