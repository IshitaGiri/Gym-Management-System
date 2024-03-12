import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Feature from '../Pages/Feature'
import About from '../Pages/About'
import Register from '../Authentication/Register'
import Login from '../Authentication/Login'
import Service from '../Pages/Service'
import ServiceDetails from '../Components/ServiceDetails'
import Blog from '../Pages/Blog'
import BlogDetails from '../Components/BlogDetails'
import Contact from '../Pages/Contact'
import BookService from '../Components/BookService'
import { useDispatch, useSelector } from 'react-redux'
import { check_token } from '../Redux/AuthSlice'
import MemberDashboard from '../Components/MemberDashboard'

const Routing = () => {
    const dispatch = useDispatch();
    const { redrictTo } = useSelector((state) => state?.auth);

    function ProtectedRoute({ children }) {
        const token =
            localStorage.getItem("token") || sessionStorage.getItem("token");
        return token !== null && token !== undefined ? (
            children
        ) : (
            <Navigate to="/login" />
        );
    }

    useEffect(() => {
        dispatch(check_token())
    }, [redrictTo])

    // Public Route
    const PublicRoute = [
        {
            path: "/login",
            component: <Login />,
        },
        {
            path: "/register",
            component: <Register />,
        },
        {
            path: "/",
            component: <Home />,
        },
        {
            path: "/about",
            component: <About />,
        },
        {
            path: "/feature",
            component: <Feature />,
        },
        {
            path: "/services",
            component: <Service />,
        },
        {
            path: "/blog",
            component: <Blog />,
        }, 
    ];

    // Private Route
    const PrivateRoute = [
        {
            path: "/contact",
            component: <Contact />,
        },
        {
            path: "/serviceDetails/:_id",
            component: <ServiceDetails />,
        },
        {
            path: "/blogDetails/:_id",
            component: <BlogDetails />,
        },
        {
            path: "/joining/:_id",
            component: <BookService />,
        },
        {
            path: "/dashboard/:memberId",
            component: <MemberDashboard />,
        }
    ];

    return (
        <>
            <Routes>
                {PublicRoute?.map((route, key) => {
                    return (
                        <>
                            <Route
                                key={key + 1}
                                path={route.path}
                                element={route.component}
                            />
                        </>
                    );
                })}
                {PrivateRoute?.map((route, key) => {
                    return (
                        <>
                            <Route
                                key={key + 1}
                                path={route.path}
                                element={<ProtectedRoute>{route.component}</ProtectedRoute>}
                            />
                        </>
                    );
                })}
            </Routes>
        </>
    );
};

export default Routing;