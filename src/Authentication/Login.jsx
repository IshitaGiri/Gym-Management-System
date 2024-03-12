import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, regLogOut } from '../Redux/AuthSlice'
import Layout from '../Common/Layout'

const initialstate = {
    email: "",
    password: "",
}

const Login = () => {
    const { redirectToor, status } = useSelector((state) => state?.auth);
    const [user, setUser] = useState(initialstate)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const onSubmitInfo = (e) => {
        e.preventDefault()
        let data = {
            "email": user.email,
            "password": user.password
        }
        dispatch(login(data));
        // navigate("/")
    };

    useEffect(() => {
        const redirectUser = () => {
            let name = localStorage.getItem("token")
            let isInLoginPage = window.location.pathname.toLowerCase() === "/login";
            if (name !== null && name !== undefined && name !== "") {
                isInLoginPage && navigate("/services");
            }
        }
        redirectUser();
    }, [redirectToor])

    const reg = () => {
        dispatch(regLogOut())
    }

    return (
        <>
            <Layout>
                <div className="container-fluid page-header mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
                        <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Log in</h4>
                        <div className="d-inline-flex">
                            <p className="m-0 text-white"><Link className="text-white" to="/">Home</Link></p>
                            <p className="m-0 text-white px-2">/</p>
                            <p className="m-0 text-white">LogIn</p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid position-relative bmi my-5" style={{ marginLeft: '200px' }}>
                    <div className="container">
                        <div className="row px-3 align-items-center">
                            <div className="col-md-6">
                                <div className="pr-md-3 d-none d-md-block">
                                    <h4 className="text-primary">Get Everything You Want</h4>
                                    <h4 className="display-4 text-white font-weight-bold mb-4">
                                        Log In
                                    </h4>
                                    <p className="m-0 text-white">
                                        We're delighted to have you back! Your journey continues here. Please enter your credentials to securely access your account. Your privacy and security are our top priorities, ensuring a seamless and protected experience every time you log in.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 bg-secondary py-5">
                                <div className="py-5 px-3">
                                    <h4 className="mb-4 text-white">Welcome back!</h4>
                                    <h1 className="mb-4 text-white">Log In</h1>
                                    <form onSubmit={onSubmitInfo}>
                                        <div className="form-row">
                                            <div className="col form-group">
                                                <input
                                                    type="email"
                                                    name='email'
                                                    value={user.email}
                                                    onChange={handleChange}
                                                    className="form-control form-control-lg bg-dark text-white"
                                                    placeholder="Email"
                                                />
                                            </div>

                                        </div>
                                        <div className="form-row">
                                            <div className="col form-group">
                                                <input
                                                    type="password"
                                                    name='password' value={user.password}
                                                    onChange={handleChange}
                                                    className="form-control form-control-lg bg-dark text-white"
                                                    placeholder="Password"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col">
                                                {status === "loading" ?
                                                    //  "Loading....." 
                                                    (
                                                        <div className="mt-2 d-flex align-items-center">
                                                            <div className="loading-box mr-2">
                                                                <span>Loading...</span>
                                                            </div>
                                                            <div className="spinner-border spinner-border-sm text-danger" role="status">
                                                                <span className="sr-only">Loading...</span>
                                                            </div>
                                                        </div>
                                                    )
                                                    : (<button type="submit" className="btn btn-lg btn-block btn-dark border-light">LogIn</button>)}
                                            </div>
                                        </div>
                                    </form>
                                    <p className="m-0 text-white mt-4" >Don't have an account? <Link to='/register' onClick={reg}>Register here</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Login
